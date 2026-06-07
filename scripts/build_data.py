from __future__ import annotations

import argparse
import json
import re
from dataclasses import dataclass
from datetime import date
from pathlib import Path
from typing import Any
from urllib.parse import urlparse

import yaml


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data" / "companies"
OUTPUT_PATH = ROOT / "src" / "data" / "labs.generated.ts"


@dataclass(frozen=True)
class TimelineItem:
  date: str
  id: str
  link: str
  snippet: str
  source: str
  title: str


@dataclass(frozen=True)
class Company:
  description: str
  id: str
  linkedin_url: str
  name: str
  order: int
  timeline: list[TimelineItem]
  website_url: str


def main() -> None:
  parser = argparse.ArgumentParser(description="Validate YAML company data and generate frontend data.")
  parser.add_argument("--check", action="store_true", help="Validate that generated frontend data is up to date.")
  args = parser.parse_args()

  companies = load_companies(DATA_DIR)
  output = render_labs_ts(companies)

  if args.check:
    if not OUTPUT_PATH.exists():
      raise SystemExit(f"Missing generated file: {OUTPUT_PATH.relative_to(ROOT)}")
    if OUTPUT_PATH.read_text(encoding="utf-8") != output:
      raise SystemExit(f"{OUTPUT_PATH.relative_to(ROOT)} is out of date. Run npm run data:build.")
    print(f"Validated {len(companies)} company files")
    return

  OUTPUT_PATH.write_text(output, encoding="utf-8")
  print(f"Wrote {OUTPUT_PATH.relative_to(ROOT)} from {len(companies)} company files")


def load_companies(data_dir: Path) -> list[Company]:
  if not data_dir.exists():
    raise SystemExit(f"Missing data directory: {data_dir.relative_to(ROOT)}")

  companies: list[Company] = []
  seen_ids: set[str] = set()
  seen_orders: dict[int, str] = {}
  for path in sorted(data_dir.glob("*.yml")):
    company = load_company(path)
    if company.id in seen_ids:
      raise SystemExit(f"Duplicate company id {company.id!r}")
    if company.order in seen_orders:
      raise SystemExit(f"Duplicate order {company.order}: {seen_orders[company.order]} and {company.id}")
    seen_ids.add(company.id)
    seen_orders[company.order] = company.id
    companies.append(company)

  if not companies:
    raise SystemExit(f"No company YAML files found in {data_dir.relative_to(ROOT)}")

  return sorted(companies, key=lambda company: (company.order, company.name.lower()))


def load_company(path: Path) -> Company:
  raw = yaml.safe_load(path.read_text(encoding="utf-8"))
  if not isinstance(raw, dict):
    raise SystemExit(f"{display_path(path)} must contain a YAML mapping")

  company_id = required_string(raw, "id", path)
  name = required_string(raw, "name", path)
  description = required_string(raw, "description", path)
  order = required_order(raw, path)
  website_url = optional_string(raw, "website", path)
  linkedin_url = optional_string(raw, "linkedin", path)

  if path.stem != company_id:
    raise SystemExit(f"{display_path(path)} filename must match id {company_id!r}")
  if slugify(name) != company_id:
    raise SystemExit(f"{display_path(path)} id must match slugified name {slugify(name)!r}")
  if website_url and is_linkedin_url(website_url):
    raise SystemExit(f"{display_path(path)} website must not be a LinkedIn URL")
  if website_url:
    validate_http_url(website_url, "website", path)
  if linkedin_url:
    validate_http_url(linkedin_url, "linkedin", path)
    if not is_linkedin_url(linkedin_url):
      raise SystemExit(f"{display_path(path)} linkedin must be a LinkedIn URL")

  raw_timeline = raw.get("timeline", [])
  if raw_timeline is None:
    raw_timeline = []
  if not isinstance(raw_timeline, list):
    raise SystemExit(f"{display_path(path)} timeline must be a list")

  timeline = [load_timeline_item(company_id, item, index, path) for index, item in enumerate(raw_timeline, start=1)]
  validate_timeline_order(timeline, path)

  return Company(
    description=description,
    id=company_id,
    linkedin_url=linkedin_url,
    name=name,
    order=order,
    timeline=timeline,
    website_url=website_url,
  )


def validate_timeline_order(timeline: list[TimelineItem], path: Path) -> None:
  previous_date = "9999-99-99"
  for index, item in enumerate(timeline, start=1):
    if item.date > previous_date:
      raise SystemExit(f"{display_path(path)} timeline item {index} must be sorted newest first")
    previous_date = item.date


def load_timeline_item(company_id: str, raw: Any, index: int, path: Path) -> TimelineItem:
  if not isinstance(raw, dict):
    raise SystemExit(f"{display_path(path)} timeline item {index} must be a mapping")

  item_date = required_iso_date(raw, "date", path, index)
  title = required_string(raw, "title", path, index)
  source = required_string(raw, "source", path, index)
  link = required_string(raw, "url", path, index)
  snippet = required_string(raw, "summary", path, index)
  validate_http_url(link, "timeline url", path, index)

  return TimelineItem(
    date=item_date,
    id=f"{company_id}-{index}",
    link=link,
    snippet=snippet,
    source=source,
    title=title,
  )


def render_labs_ts(companies: list[Company]) -> str:
  labs = [
    {
      "description": company.description,
      "id": company.id,
      "linkedinUrl": company.linkedin_url,
      "name": company.name,
      "timeline": [
        {
          "date": item.date,
          "id": item.id,
          "link": item.link,
          "snippet": item.snippet,
          "source": item.source,
          "title": item.title,
        }
        for item in company.timeline
      ],
      "websiteUrl": company.website_url,
    }
    for company in companies
  ]
  body = json.dumps(labs, indent=2, ensure_ascii=True)
  return "\n".join(
    [
      "export type CompanyNewsItem = {",
      "  date: string",
      "  id: string",
      "  link: string",
      "  snippet: string",
      "  source: string",
      "  title: string",
      "}",
      "",
      "export type LabProfile = {",
      "  description: string",
      "  id: string",
      "  linkedinUrl: string",
      "  name: string",
      "  timeline: readonly CompanyNewsItem[]",
      "  websiteUrl: string",
      "}",
      "",
      f"export const labs: readonly LabProfile[] = {body}",
      "",
    ]
  )


def required_string(raw: dict[str, Any], key: str, path: Path, index: int | None = None) -> str:
  value = raw.get(key)
  if not isinstance(value, str) or not value.strip():
    raise SystemExit(f"{location(path, index)} {key!r} must be a non-empty string")
  return value.strip()


def optional_string(raw: dict[str, Any], key: str, path: Path) -> str:
  value = raw.get(key, "")
  if value is None:
    return ""
  if not isinstance(value, str):
    raise SystemExit(f"{display_path(path)} {key!r} must be a string")
  return value.strip()


def required_iso_date(raw: dict[str, Any], key: str, path: Path, index: int) -> str:
  value = raw.get(key)
  if isinstance(value, date):
    return value.isoformat()
  if not isinstance(value, str) or not value.strip():
    raise SystemExit(f"{location(path, index)} {key!r} must be an ISO date string")
  value = value.strip()
  try:
    date.fromisoformat(value)
  except ValueError as exc:
    raise SystemExit(f"{location(path, index)} {key!r} must use YYYY-MM-DD") from exc
  return value


def required_order(raw: dict[str, Any], path: Path) -> int:
  value = raw.get("order")
  if not isinstance(value, int) or value < 1:
    raise SystemExit(f"{display_path(path)} 'order' must be a positive integer")
  return value


def validate_http_url(value: str, label: str, path: Path, index: int | None = None) -> None:
  try:
    parsed = urlparse(value)
  except ValueError as exc:
    raise SystemExit(f"{location(path, index)} {label} is not a valid URL") from exc

  if parsed.scheme not in {"http", "https"} or not parsed.netloc:
    raise SystemExit(f"{location(path, index)} {label} must be an http(s) URL")


def slugify(value: str) -> str:
  slug = value.lower().replace("&", "and")
  slug = re.sub(r"[^a-z0-9]+", "-", slug)
  return slug.strip("-")


def is_linkedin_url(value: str) -> bool:
  if not value:
    return False
  try:
    return (urlparse(value).hostname or "").lower().removeprefix("www.") == "linkedin.com"
  except ValueError:
    return False


def display_path(path: Path) -> str:
  return str(path.relative_to(ROOT))


def location(path: Path, index: int | None) -> str:
  if index is None:
    return display_path(path)
  return f"{display_path(path)} timeline item {index}"


if __name__ == "__main__":
  main()
