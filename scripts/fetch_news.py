from __future__ import annotations

import argparse
import csv
import json
import os
import re
import textwrap
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

import requests
from dotenv import load_dotenv


ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = ROOT / "neolabs_company_websites.csv"
OUTPUT_PATH = ROOT / "src" / "data" / "news.generated.ts"
SERPER_NEWS_URL = "https://google.serper.dev/news"


@dataclass(frozen=True)
class Company:
  id: str
  name: str
  website_url: str
  linkedin_url: str


def main() -> None:
  parser = argparse.ArgumentParser(description="Fetch company news from Serper and write a generated TS module.")
  parser.add_argument("--company", help="Fetch one company by exact name or slug.")
  parser.add_argument("--limit", type=int, help="Maximum number of companies to fetch.")
  parser.add_argument("--per-company", type=int, default=5, help="Maximum news results per company.")
  parser.add_argument("--include-markdown", action="store_true", help="Fetch article markdown through pure.md.")
  parser.add_argument("--markdown-limit", type=int, default=1, help="Markdown articles to fetch per company.")
  args = parser.parse_args()

  load_dotenv(ROOT / ".env")
  api_key = os.environ.get("SERPER_API_KEY", "").strip()
  if not api_key:
    raise SystemExit("SERPER_API_KEY is missing. Add it to .env.")

  companies = load_companies(CSV_PATH)
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
    news_items = fetch_company_news(api_key, company, args.per_company)
    if args.include_markdown:
      news_items = attach_markdown(news_items, args.markdown_limit)
    generated[company.id] = news_items
    print(f"{company.name}: {len(news_items)} news items")

  write_generated_ts(generated, OUTPUT_PATH)
  print(f"Wrote {OUTPUT_PATH.relative_to(ROOT)}")


def load_companies(path: Path) -> list[Company]:
  rows: list[Company] = []
  with path.open(newline="", encoding="utf-8") as file:
    reader = csv.DictReader(file)
    for row in reader:
      name = (row.get("company name") or "").strip()
      website_url = (row.get("website") or "").strip()
      linkedin_url = (row.get("linkedin") or "").strip()
      if not name:
        continue
      if is_linkedin_url(website_url):
        website_url = ""
      rows.append(
        Company(
          id=slugify(name),
          name=name,
          website_url=website_url,
          linkedin_url=linkedin_url,
        )
      )
  return rows


def fetch_company_news(api_key: str, company: Company, limit: int) -> list[dict[str, str]]:
  query = build_news_query(company)
  response = requests.post(
    SERPER_NEWS_URL,
    headers={
      "X-API-KEY": api_key,
      "Content-Type": "application/json",
    },
    json={"q": query, "num": limit},
    timeout=30,
  )
  response.raise_for_status()
  payload = response.json()
  raw_items = payload.get("news") or []

  items: list[dict[str, str]] = []
  for index, item in enumerate(raw_items[:limit], start=1):
    title = str(item.get("title") or "").strip()
    link = str(item.get("link") or "").strip()
    if not title or not link:
      continue
    items.append(
      {
        "id": f"{company.id}-{index}",
        "title": title,
        "link": link,
        "source": str(item.get("source") or "").strip(),
        "date": str(item.get("date") or "").strip(),
        "snippet": str(item.get("snippet") or "").strip(),
      }
    )
  return items


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


def build_news_query(company: Company) -> str:
  hostname = hostname_for(company.website_url)
  if hostname:
    return f'"{company.name}" {hostname}'
  return f'"{company.name}" AI'


def write_generated_ts(news_by_company: dict[str, list[dict[str, str]]], path: Path) -> None:
  fetched_at = datetime.now(timezone.utc).isoformat()
  body = json.dumps(news_by_company, ensure_ascii=False, indent=2)
  path.write_text(
    "\n".join(
      [
        "export type CompanyNewsItem = {",
        "  date: string",
        "  id: string",
        "  link: string",
        "  markdown?: string",
        "  snippet: string",
        "  source: string",
        "  title: string",
        "}",
        "",
        f"export const newsFetchedAt = {json.dumps(fetched_at)}",
        "",
        f"export const companyNews: Record<string, CompanyNewsItem[]> = {body}",
        "",
      ]
    ),
    encoding="utf-8",
  )


def slugify(value: str) -> str:
  slug = value.lower().replace("&", "and")
  slug = re.sub(r"[^a-z0-9]+", "-", slug)
  return slug.strip("-")


def hostname_for(url: str) -> str:
  if not url:
    return ""
  try:
    return urlparse(url).hostname.replace("www.", "") if urlparse(url).hostname else ""
  except ValueError:
    return ""


def is_linkedin_url(value: str) -> bool:
  return hostname_for(value) == "linkedin.com"


if __name__ == "__main__":
  main()
