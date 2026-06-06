# NeoLabs

A Vite application for browsing a curated index of AI labs and companies.

## Development

```bash
npm install
npm run dev
```

## Data

Company profiles come from `neolabs_company_websites.csv`.

News timeline data is generated into `src/data/news.generated.ts`:

```bash
uv run python scripts/fetch_news.py --per-company 5
```

Set `SERPER_API_KEY` in `.env` before refreshing news. To enrich top articles with markdown via pure.md:

```bash
uv run python scripts/fetch_news.py --per-company 5 --include-markdown --markdown-limit 1
```
