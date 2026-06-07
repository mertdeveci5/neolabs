## Summary

Describe the company or data change in one or two sentences.

## Adding A Lab

For new labs, start with:

```bash
npm run data:new -- "Company Name"
```

Then fill in the generated YAML file in `data/companies/`.

## Checklist

- [ ] I edited `data/companies/*.yml`, not `src/data/labs.generated.ts` directly.
- [ ] Timeline items use first-party, investor, reputable publication, or official wire sources.
- [ ] Timeline dates use `YYYY-MM-DD`.
- [ ] Timeline items are sorted newest first.
- [ ] I ran `npm run data:build`.
- [ ] I ran `npm run build`.
