from __future__ import annotations

import argparse
import re
from pathlib import Path

import yaml


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data" / "companies"


def main() -> None:
  parser = argparse.ArgumentParser(description="Create a new company YAML stub.")
  parser.add_argument("name", help="Company name, for example 'Example AI'.")
  parser.add_argument("--website", default="", help="Company website URL.")
  parser.add_argument("--linkedin", default="", help="Company LinkedIn URL.")
  args = parser.parse_args()

  name = args.name.strip()
  if not name:
    raise SystemExit("Company name is required.")

  company_id = slugify(name)
  path = DATA_DIR / f"{company_id}.yml"
  if path.exists():
    raise SystemExit(f"{path.relative_to(ROOT)} already exists.")

  data = {
    "id": company_id,
    "name": name,
    "order": next_order(DATA_DIR),
    "website": args.website.strip(),
    "linkedin": args.linkedin.strip(),
    "description": "",
    "timeline": [],
  }

  path.write_text(yaml.safe_dump(data, sort_keys=False, allow_unicode=False, width=100), encoding="utf-8")
  print(f"Created {path.relative_to(ROOT)}")
  print("Fill in description and timeline, then run npm run data:build.")


def next_order(data_dir: Path) -> int:
  orders: list[int] = []
  for path in data_dir.glob("*.yml"):
    raw = yaml.safe_load(path.read_text(encoding="utf-8"))
    if isinstance(raw, dict):
      order = raw.get("order")
      if isinstance(order, int):
        orders.append(order)
  return max(orders, default=0) + 1


def slugify(value: str) -> str:
  slug = value.lower().replace("&", "and")
  slug = re.sub(r"[^a-z0-9]+", "-", slug)
  return slug.strip("-")


if __name__ == "__main__":
  main()
