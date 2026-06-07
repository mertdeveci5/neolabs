# Contributing

Thanks for improving NeoLabs. Most contributions are data changes.

## Add Or Edit A Company

1. Run `npm run data:new -- "Company Name"` for a new company.
2. Edit one file in `data/companies/`.
3. Run:

```bash
npm install
npm run data:build
npm run build
```

4. Open a pull request with a short summary and source links.

You can also copy `data/company.example.yml` manually.

## Data Rules

- Keep one company per YAML file.
- The filename must match the `id`.
- The `id` must match the slugified company name.
- Use a unique `order` to control sidebar position.
- Leave `website` empty if there is no company website.
- Do not put LinkedIn in the `website` field.
- Timeline dates must use `YYYY-MM-DD`.
- Timeline items must be sorted newest first.
- Timeline items must link to first-party, investor, reputable publication, or official wire sources.
- Do not add weak search-result filler. Empty timeline data is better than bad timeline data.

## Generated Files

Do not edit `src/data/labs.generated.ts` by hand. It is generated from
`data/companies/*.yml`.

Run this after changing YAML:

```bash
npm run data:build
```

CI checks that generated data is up to date.

## Draft Helpers

These commands can help find candidate descriptions or news, but their output
must be reviewed before copying into company YAML.

```bash
npm run data:fetch:descriptions
npm run data:fetch:news
```

`npm run data:fetch:news` requires `SERPER_API_KEY` in `.env`.
