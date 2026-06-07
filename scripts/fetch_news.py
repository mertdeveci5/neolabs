from __future__ import annotations

import argparse
import os
import re
import textwrap
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

import requests
import yaml
from dotenv import load_dotenv


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data" / "companies"
OUTPUT_PATH = ROOT / "data" / "drafts" / "news.generated.yml"
SERPER_NEWS_URL = "https://google.serper.dev/news"
MAX_SERPER_NEWS_RESULTS = 10
DEFAULT_CANDIDATE_COUNT = MAX_SERPER_NEWS_RESULTS

REPUTABLE_PUBLICATION_DOMAINS = {
  "axios.com",
  "bloomberg.com",
  "businessinsider.com",
  "cnbc.com",
  "crunchbase.com",
  "economist.com",
  "fastcompany.com",
  "forbes.com",
  "fortune.com",
  "ft.com",
  "ieee.org",
  "information.com",
  "latimes.com",
  "nytimes.com",
  "reuters.com",
  "semafor.com",
  "sifted.eu",
  "techcrunch.com",
  "technologyreview.com",
  "technical.ly",
  "theinformation.com",
  "theregister.com",
  "theverge.com",
  "timesofisrael.com",
  "venturebeat.com",
  "washingtonpost.com",
  "wired.com",
  "wsj.com",
}

INVESTOR_DOMAINS = {
  "a16z.com",
  "accel.com",
  "amplifypartners.com",
  "baincapitalventures.com",
  "benchmark.com",
  "bessemer.com",
  "bvp.com",
  "coatue.com",
  "conviction.com",
  "eclipse.vc",
  "felicis.com",
  "firstmark.com",
  "foundersfund.com",
  "generalcatalyst.com",
  "greenoaks.com",
  "greylock.com",
  "indexventures.com",
  "khoslaventures.com",
  "kleinerperkins.com",
  "lightspeedvp.com",
  "lsvp.com",
  "luxcapital.com",
  "menlovc.com",
  "nea.com",
  "nfx.com",
  "radical.vc",
  "redpoint.com",
  "sequoiacap.com",
  "sparkcapital.com",
  "svangel.com",
  "thrivecap.com",
  "unusual.vc",
}

OFFICIAL_WIRE_DOMAINS = {
  "businesswire.com",
  "globenewswire.com",
  "prnewswire.com",
}

SECOND_LEVEL_TLDS = {
  "ac.uk",
  "co.jp",
  "co.nz",
  "co.uk",
  "com.au",
  "com.br",
  "com.cn",
  "com.sg",
  "com.tr",
  "com.mx",
  "org.uk",
}

AI_CONTEXT_TERMS = {
  "agi",
  "ai",
  "artificial intelligence",
  "foundation model",
  "funding",
  "lab",
  "labs",
  "launch",
  "model",
  "models",
  "raises",
  "research",
  "startup",
}

TIMELINE_CONTEXT_TERMS = {
  "announce",
  "announced",
  "announces",
  "announcing",
  "funding",
  "grant",
  "grants",
  "introduce",
  "introduced",
  "introduces",
  "launch",
  "launched",
  "launches",
  "partnership",
  "preview",
  "raise",
  "raised",
  "raises",
  "release",
  "released",
  "releases",
  "research",
  "series a",
  "series b",
  "seed",
}

FIRST_PARTY_PATH_HINTS = {
  "announce",
  "announcing",
  "blog",
  "news",
  "newsroom",
  "post",
  "press",
  "research",
  "stories",
  "updates",
}

FIRST_PARTY_LISTING_PATHS = {
  "blog",
  "blogs",
  "news",
  "newsroom",
  "press",
  "research",
  "stories",
  "updates",
}


@dataclass(frozen=True)
class Company:
  id: str
  name: str
  website_url: str
  linkedin_url: str


def main() -> None:
  parser = argparse.ArgumentParser(description="Fetch candidate company news from Serper and write a draft YAML file.")
  parser.add_argument("--company", help="Fetch one company by exact name or slug.")
  parser.add_argument("--limit", type=int, help="Maximum number of companies to fetch.")
  parser.add_argument("--per-company", type=int, default=5, help="Maximum news results per company.")
  parser.add_argument(
    "--candidate-count",
    type=int,
    default=DEFAULT_CANDIDATE_COUNT,
    help="Raw Serper news results to score before discarding weak sources, capped at 10.",
  )
  parser.add_argument("--include-markdown", action="store_true", help="Fetch article markdown through pure.md.")
  parser.add_argument("--markdown-limit", type=int, default=1, help="Markdown articles to fetch per company.")
  args = parser.parse_args()

  load_dotenv(ROOT / ".env")
  api_key = os.environ.get("SERPER_API_KEY", "").strip()
  if not api_key:
    raise SystemExit("SERPER_API_KEY is missing. Add it to .env.")

  companies = load_companies(DATA_DIR)
  if args.company:
    company_query = args.company.strip().lower()
    companies = [
      company for company in companies
      if company.name.lower() == company_query or company.id == company_query
    ]
    if not companies:
      raise SystemExit(f"No company matched {args.company!r}.")

  if args.limit is not None:
    companies = companies[: args.limit]

  generated: dict[str, list[dict[str, str]]] = {}
  for company in companies:
    news_items = fetch_company_news(api_key, company, args.per_company, args.candidate_count)
    if args.include_markdown:
      news_items = attach_markdown(news_items, args.markdown_limit)
    generated[company.id] = news_items
    print(f"{company.name}: {len(news_items)} news items")

  write_generated_yml(generated, OUTPUT_PATH)
  print(f"Wrote {OUTPUT_PATH.relative_to(ROOT)}")


def load_companies(path: Path) -> list[Company]:
  rows: list[Company] = []
  for company_path in sorted(path.glob("*.yml")):
    raw = yaml.safe_load(company_path.read_text(encoding="utf-8"))
    if not isinstance(raw, dict):
      continue

    company_id = str(raw.get("id") or "").strip()
    name = str(raw.get("name") or "").strip()
    website_url = str(raw.get("website") or "").strip()
    linkedin_url = str(raw.get("linkedin") or "").strip()
    if not company_id or not name:
      continue
    if is_linkedin_url(website_url):
      website_url = ""
    rows.append(
      Company(
        id=company_id,
        name=name,
        website_url=website_url,
        linkedin_url=linkedin_url,
      )
    )
  return rows


def fetch_company_news(
  api_key: str,
  company: Company,
  limit: int,
  candidate_count: int,
) -> list[dict[str, str]]:
  raw_items: list[dict[str, object]] = []
  seen_links: set[str] = set()
  for query in build_news_queries(company):
    for item in fetch_raw_news(api_key, query, limit, candidate_count):
      link = str(item.get("link") or "").strip()
      if not link or link in seen_links:
        continue
      seen_links.add(link)
      raw_items.append(item)

  qualified_items: list[tuple[int, int, dict[str, str]]] = []
  for raw_index, item in enumerate(raw_items, start=1):
    title = str(item.get("title") or "").strip()
    link = str(item.get("link") or "").strip()
    if not title or not link:
      continue

    source = str(item.get("source") or "").strip()
    snippet = str(item.get("snippet") or "").strip()
    score = score_news_item(company, title, link, source, snippet)
    if score is None:
      continue

    qualified_items.append(
      (
        score,
        raw_index,
        {
          "id": "",
          "title": title,
          "link": link,
          "source": source,
          "date": str(item.get("date") or "").strip(),
          "snippet": snippet,
        },
      )
    )

  qualified_items.sort(key=lambda ranked_item: (-ranked_item[0], ranked_item[1]))

  items: list[dict[str, str]] = []
  for index, (_, _, item) in enumerate(qualified_items[:limit], start=1):
    items.append({**item, "id": f"{company.id}-{index}"})
  return items


def fetch_raw_news(
  api_key: str,
  query: str,
  limit: int,
  candidate_count: int,
) -> list[dict[str, object]]:
  response = requests.post(
    SERPER_NEWS_URL,
    headers={
      "X-API-KEY": api_key,
      "Content-Type": "application/json",
    },
    json={"q": query, "num": min(max(limit, candidate_count), MAX_SERPER_NEWS_RESULTS)},
    timeout=30,
  )
  response.raise_for_status()
  payload = response.json()
  return list(payload.get("news") or [])


def score_news_item(
  company: Company,
  title: str,
  link: str,
  source: str,
  snippet: str,
) -> int | None:
  link_host = hostname_for(link)
  company_host = hostname_for(company.website_url)
  text = normalize_text(" ".join([title, snippet, source, link]))

  first_party = bool(company_host) and same_registrable_domain(link_host, company_host)
  reputable_publication = domain_in(link_host, REPUTABLE_PUBLICATION_DOMAINS)
  investor = domain_in(link_host, INVESTOR_DOMAINS)
  official_wire = domain_in(link_host, OFFICIAL_WIRE_DOMAINS)

  if not (first_party or reputable_publication or investor or official_wire):
    return None

  if first_party and not is_first_party_timeline_page(link, text):
    return None

  if not first_party and not is_relevant_to_company(company, text):
    return None

  score = 0
  if first_party:
    score += 400
  if investor:
    score += 300
  if reputable_publication:
    score += 250
  if official_wire:
    score += 180
  if has_ai_context(text):
    score += 25
  if has_timeline_context(text):
    score += 40
  if source and normalize_text(source) in text:
    score += 5
  return score


def is_relevant_to_company(company: Company, text: str) -> bool:
  aliases = company_aliases(company)
  if any(alias in text for alias in aliases):
    return True

  short_aliases = company_short_aliases(company)
  return bool(short_aliases) and has_ai_context(text) and any(alias in text for alias in short_aliases)


def company_aliases(company: Company) -> set[str]:
  raw_name = company.name.strip()
  aliases = {
    normalize_text(raw_name),
    normalize_text(re.sub(r"\([^)]*\)", "", raw_name)),
  }

  aliases.update(normalize_text(match) for match in re.findall(r"\(([^)]*)\)", raw_name))

  domain = registrable_domain(hostname_for(company.website_url))
  if domain:
    stem = domain.split(".", 1)[0]
    aliases.add(normalize_text(stem))
    if domain.endswith(".ai"):
      aliases.add(normalize_text(f"{stem} ai"))

  return {alias for alias in aliases if len(alias) >= 12 or " " in alias}


def company_short_aliases(company: Company) -> set[str]:
  aliases = {
    normalize_text(re.sub(r"\([^)]*\)", "", company.name)),
  }
  domain = registrable_domain(hostname_for(company.website_url))
  if domain:
    aliases.add(normalize_text(domain.split(".", 1)[0]))

  return {
    alias for alias in aliases
    if 4 <= len(alias) < 12 and alias not in {"magic", "hark", "pool", "prime"}
  }


def has_ai_context(text: str) -> bool:
  return any(term in text for term in AI_CONTEXT_TERMS)


def has_timeline_context(text: str) -> bool:
  return any(term in text for term in TIMELINE_CONTEXT_TERMS)


def is_first_party_timeline_page(link: str, text: str) -> bool:
  try:
    path = urlparse(link).path.lower().strip("/")
  except ValueError:
    return False

  if not path:
    return False

  path_text = normalize_text(path)
  if path_text in FIRST_PARTY_LISTING_PATHS:
    return False

  return has_timeline_context(text) or any(hint in path_text for hint in FIRST_PARTY_PATH_HINTS)


def attach_markdown(items: list[dict[str, str]], markdown_limit: int) -> list[dict[str, str]]:
  remaining = max(0, markdown_limit)
  next_items: list[dict[str, str]] = []
  for item in items:
    if remaining > 0 and item.get("link"):
      markdown = fetch_pure_markdown(item["link"])
      if markdown:
        item = {**item, "markdown": markdown}
      remaining -= 1
    next_items.append(item)
  return next_items


def fetch_pure_markdown(url: str) -> str:
  try:
    response = requests.get(f"https://pure.md/{url}", timeout=30)
    response.raise_for_status()
  except requests.RequestException:
    return ""

  markdown = response.text.strip()
  markdown = re.sub(r"\n{3,}", "\n\n", markdown)
  return textwrap.shorten(markdown, width=2800, placeholder=" ...")


def build_news_queries(company: Company) -> list[str]:
  preferred_name = preferred_query_name(company)
  queries: list[str] = []

  hostname = hostname_for(company.website_url)
  if hostname:
    queries.append(f'site:{registrable_domain(hostname)} "{preferred_name}" AI research launch')

  queries.append(f'"{preferred_name}" AI funding launch research')
  return queries


def preferred_query_name(company: Company) -> str:
  parenthetical_names = [
    clean_query_phrase(match)
    for match in re.findall(r"\(([^)]*)\)", company.name)
    if len(clean_query_phrase(match)) >= 4
  ]
  if parenthetical_names:
    return max(parenthetical_names, key=len)

  stripped_name = clean_query_phrase(re.sub(r"\([^)]*\)", "", company.name))
  if stripped_name:
    return stripped_name

  return clean_query_phrase(company.name)


def clean_query_phrase(value: str) -> str:
  return re.sub(r"\s+", " ", value).strip()


def write_generated_yml(news_by_company: dict[str, list[dict[str, str]]], path: Path) -> None:
  draft = {
    "fetched_at": datetime.now(timezone.utc).isoformat(),
    "companies": {
      company_id: [
        {
          "date": item.get("date", ""),
          "title": item.get("title", ""),
          "source": item.get("source", ""),
          "url": item.get("link", ""),
          "summary": item.get("snippet", ""),
          **({"markdown": item["markdown"]} if item.get("markdown") else {}),
        }
        for item in items
      ]
      for company_id, items in news_by_company.items()
    },
  }
  path.parent.mkdir(parents=True, exist_ok=True)
  path.write_text(yaml.safe_dump(draft, sort_keys=False, allow_unicode=False, width=100), encoding="utf-8")


def hostname_for(url: str) -> str:
  if not url:
    return ""
  try:
    hostname = urlparse(url).hostname or ""
    return normalize_hostname(hostname)
  except ValueError:
    return ""


def normalize_hostname(hostname: str) -> str:
  hostname = hostname.lower().strip().rstrip(".")
  return hostname[4:] if hostname.startswith("www.") else hostname


def domain_in(hostname: str, domains: set[str]) -> bool:
  hostname = normalize_hostname(hostname)
  return any(hostname == domain or hostname.endswith(f".{domain}") for domain in domains)


def same_registrable_domain(left: str, right: str) -> bool:
  left_domain = registrable_domain(left)
  right_domain = registrable_domain(right)
  return bool(left_domain and right_domain and left_domain == right_domain)


def registrable_domain(hostname: str) -> str:
  hostname = normalize_hostname(hostname)
  parts = hostname.split(".")
  if len(parts) < 2:
    return hostname

  suffix = ".".join(parts[-2:])
  if suffix in SECOND_LEVEL_TLDS and len(parts) >= 3:
    return ".".join(parts[-3:])
  return suffix


def normalize_text(value: str) -> str:
  value = value.lower()
  value = value.replace("&", " and ")
  value = re.sub(r"[^a-z0-9]+", " ", value)
  return re.sub(r"\s+", " ", value).strip()


def is_linkedin_url(value: str) -> bool:
  return hostname_for(value) == "linkedin.com"


if __name__ == "__main__":
  main()
