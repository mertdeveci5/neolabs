# NeoLabs

NeoLabs is a curated index of AI labs and AI companies.

The site is a static Vite app. Company data lives in YAML files so contributors
can add or fix entries with small pull requests.

## Run Locally

```bash
npm install
npm run data:build
npm run dev
```

## Add a Lab

1. Fork the repo and create a branch.
2. Run:

```bash
npm run data:new -- "Company Name"
```

3. Open the new file in `data/companies/`.
4. Fill in the YAML fields.
5. Add only relevant timeline items from strong sources.
6. Run:

```bash
npm run data:build
npm run build
```

7. Commit the YAML file and the regenerated `src/data/labs.generated.ts`.
8. Open a pull request with a short summary and source links.

Do not edit `src/data/labs.generated.ts` by hand. It is generated from the YAML
files.

## YAML Format

Each company has one file in `data/companies/`.

```yaml
id: example-ai
name: Example AI
order: 54
website: https://example.ai/
linkedin: https://www.linkedin.com/company/example-ai/
description: Example AI builds frontier models for example use cases.
timeline:
  - date: "2026-01-15"
    title: Example AI announces Series A funding
    source: Example AI
    url: https://example.ai/news/series-a
    summary: Example AI announced a Series A funding round.
```

Rules:

- `id` must match the filename without `.yml`.
- `order` must be unique and controls the sidebar order.
- Leave `website` empty if there is no company website.
- Do not put LinkedIn in `website`.
- Keep `description` short and factual.
- Timeline dates must use `YYYY-MM-DD`.
- Timeline items must be sorted newest first.
- Prefer company, investor, reputable publication, or official wire sources.
- Use `timeline: []` if there are no strong sources.

## Edit a Lab

1. Update the existing YAML file in `data/companies/`.
2. Run:

```bash
npm run data:build
npm run build
```

3. Open a pull request with the changed source links.

## Export

The app has a `Download CSV` button. The exported file opens in Excel, Numbers,
Google Sheets, and other spreadsheet tools.
