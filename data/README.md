# Data

The source data lives in `data/companies/*.yml`.

Use the helper when adding a company:

```bash
npm run data:new -- "Company Name"
```

You can also copy `data/company.example.yml` manually.

After editing company YAML, run:

```bash
npm run data:build
npm run build
```

`src/data/labs.generated.ts` is generated from YAML and should not be edited by
hand.

Timeline entries should use high-quality sources:

- company website
- investor announcement
- reputable publication
- official wire announcement

If no good source exists, leave `timeline: []`.

Timeline entries must be sorted newest first.
