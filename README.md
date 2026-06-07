# NeoLabs

NeoLabs is a curated index of AI labs and AI companies.

The app is a static Vite site. The data is stored in YAML so contributors can
add or correct companies with small, readable pull requests.

## Run Locally

```bash
npm install
npm run data:build
npm run dev
```

## Contribute Data

Company data lives in `data/companies/*.yml`.

To add a company:

1. Copy `data/company.example.yml` to `data/companies/<company-id>.yml`.
2. Fill in the company fields and timeline sources.
3. Run `npm run data:build`.
4. Run `npm run build`.
5. Open a pull request.

To edit a company, update its YAML file and run the same commands.

## Company File Format

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

- `id` must match the filename.
- `id` must match the slugified company name.
- `order` controls sidebar order and must be unique.
- `website` can be empty.
- Do not put LinkedIn in `website`.
- Timeline dates must use `YYYY-MM-DD`.
- Timeline items must be sorted newest first.
- Timeline items must use strong sources.

Good timeline sources:

- company website
- investor announcement
- reputable publication
- official wire announcement

If there is no good timeline source, use `timeline: []`.

## Generated Data

The frontend imports `src/data/labs.generated.ts`.

Do not edit that file by hand. It is generated from `data/companies/*.yml`.

```bash
npm run data:build
```

CI checks that generated data is current:

```bash
npm run data:check
```

## Draft Helpers

These commands create draft files under `data/drafts/`. Drafts are ignored by
Git and must be reviewed before copying anything into company YAML.

```bash
npm run data:fetch:descriptions
npm run data:fetch:news
```

`npm run data:fetch:news` requires `SERPER_API_KEY` in `.env`.

## Useful Commands

```bash
npm run data:build
npm run data:check
npm run build
```
