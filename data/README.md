# Data

The source data lives in `data/companies/*.yml`.

Use `data/company.example.yml` when adding a company.

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
