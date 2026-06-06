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

The fetcher prioritizes company-domain pages first, then investor sites,
reputable publications, and official wire announcements. Other sources are
discarded.

Set `SERPER_API_KEY` in `.env` before refreshing news. To enrich top articles with markdown via pure.md:

```bash
uv run python scripts/fetch_news.py --per-company 5 --include-markdown --markdown-limit 1
```
