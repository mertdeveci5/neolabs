from __future__ import annotations

import html
import re
import unicodedata
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

import requests
import yaml


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data" / "companies"
OUTPUT_PATH = ROOT / "data" / "drafts" / "descriptions.generated.yml"
REQUEST_TIMEOUT = 12

DESCRIPTION_KEYS = {
  ("name", "description"),
  ("property", "og:description"),
  ("name", "twitter:description"),
  ("itemprop", "description"),
}

REJECT_PATTERNS = [
  "access denied",
  "enable javascript",
  "just a moment",
  "please verify",
  "privacy policy",
  "request unsuccessful",
  "security check",
  "temporarily unavailable",
]


class MetadataParser(HTMLParser):
  def __init__(self) -> None:
    super().__init__(convert_charrefs=True)
    self.descriptions: list[str] = []

  def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
    if tag.lower() != "meta":
      return

    values = {name.lower(): (value or "").strip() for name, value in attrs}
    content = values.get("content", "")
    if not content:
      return

    for attr, expected_value in DESCRIPTION_KEYS:
      if values.get(attr, "").lower() == expected_value:
        self.descriptions.append(content)


def main() -> None:
  descriptions: dict[str, str] = {}

  for company in load_companies(DATA_DIR):
    if not company["website_url"]:
      print(f"{company['name']}: no website")
      continue

    description = fetch_description(company["website_url"])
    if description:
      descriptions[company["id"]] = description
      print(f"{company['name']}: {description}")
    else:
      print(f"{company['name']}: no description")

  write_descriptions_yml(descriptions, OUTPUT_PATH)
  print(f"Wrote {OUTPUT_PATH.relative_to(ROOT)}")


def load_companies(path: Path) -> list[dict[str, str]]:
  companies: list[dict[str, str]] = []
  for company_path in sorted(path.glob("*.yml")):
    raw = yaml.safe_load(company_path.read_text(encoding="utf-8"))
    if not isinstance(raw, dict):
      continue
    name = str(raw.get("name") or "").strip()
    company_id = str(raw.get("id") or "").strip()
    website_url = str(raw.get("website") or "").strip()
    if not name or not company_id:
      continue
    if is_linkedin_url(website_url):
      website_url = ""
    companies.append(
      {
        "id": company_id,
        "name": name,
        "website_url": website_url,
      }
    )
  return companies


def fetch_description(url: str) -> str:
  try:
    response = requests.get(
      url,
      allow_redirects=True,
      headers={
        "Accept": "text/html,application/xhtml+xml",
        "User-Agent": "Mozilla/5.0 (compatible; NeoLabsBot/1.0; +https://neolabs-7o2.pages.dev/)",
      },
      timeout=REQUEST_TIMEOUT,
    )
    response.raise_for_status()
  except requests.RequestException:
    return ""

  parser = MetadataParser()
  parser.feed(response.text[:500_000])

  return select_description(parser.descriptions)


def select_description(candidates: list[str]) -> str:
  descriptions = list(dict.fromkeys(filter(None, (normalize_description(candidate) for candidate in candidates))))
  if not descriptions:
    return ""

  return max(descriptions, key=lambda description: min(len(description), 240))


def normalize_description(value: str) -> str:
  value = html.unescape(value)
  value = value.translate(
    str.maketrans(
      {
        "\u2018": "'",
        "\u2019": "'",
        "\u201c": '"',
        "\u201d": '"',
        "\u2013": "-",
        "\u2014": "-",
      }
    )
  )
  value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode("ascii")
  value = re.sub(r"\s+", " ", value).strip()
  value = value.strip(" -_|")

  if len(value) < 28:
    return ""

  lowered = value.lower()
  if any(pattern in lowered for pattern in REJECT_PATTERNS):
    return ""

  return trim_to_sentence(value, 300)


def trim_to_sentence(value: str, max_length: int) -> str:
  if len(value) <= max_length:
    return value

  clipped = value[:max_length].rstrip()
  sentence_end = max(clipped.rfind("."), clipped.rfind("!"), clipped.rfind("?"))
  if sentence_end >= 120:
    return clipped[: sentence_end + 1]

  return clipped.rsplit(" ", 1)[0].rstrip(" ,;:") + "..."


def write_descriptions_yml(descriptions: dict[str, str], path: Path) -> None:
  path.parent.mkdir(parents=True, exist_ok=True)
  path.write_text(yaml.safe_dump(descriptions, sort_keys=True, allow_unicode=False, width=100), encoding="utf-8")


def is_linkedin_url(value: str) -> bool:
  if not value:
    return False
  try:
    return (urlparse(value).hostname or "").lower().removeprefix("www.") == "linkedin.com"
  except ValueError:
    return False


if __name__ == "__main__":
  main()
