# NeoLabs

A Vite application for browsing a curated index of AI labs and companies.

## Development

```bash
npm install
npm run data:build
npm run dev
```

## Data

The editable source of truth lives in `data/companies/*.yml`, with one file per
company. This keeps open-source contributions small and reviewable.

Each company file uses this shape:

```yaml
id: reflection-ai
name: Reflection AI
order: 5
website: https://reflection.ai/
linkedin: https://www.linkedin.com/company/reflectionai/
description: Building frontier open intelligence.
timeline:
  - date: "2026-03-26"
    title: Nvidia-backed Reflection AI eyes $25 billion valuation, WSJ reports
    source: Reuters
    url: https://www.reuters.com/business/nvidia-backed-reflection-ai-eyes-25-billion-valuation-wsj-reports-2026-03-26/
    summary: Reflection AI is in talks to raise $2.5 billion at a $25 billion valuation.
```

Rules:

- `id` must match the filename and the slugified company name.
- `order` controls the sidebar order.
- `website` can be empty, but it must not fall back to LinkedIn.
- Timeline dates use `YYYY-MM-DD`.
- Timeline items should be first-party, investor, reputable publication, or official wire sources.

After editing YAML, regenerate the frontend data module:

```bash
npm run data:build
```

This writes `src/data/labs.generated.ts`, which is committed so the static Vite
app can build without a database.

## Draft Helpers

The fetch scripts are curation helpers only. They read `data/companies/*.yml`
and write draft files under `data/drafts/`; they do not update the app directly.

Generate draft website metadata descriptions:

```bash
npm run data:fetch:descriptions
```

Generate draft news candidates with Serper:

```bash
npm run data:fetch:news
```

Set `SERPER_API_KEY` in `.env` first. The news fetcher prioritizes company-domain
pages, investor sites, reputable publications, and official wire announcements;
other sources are discarded.
