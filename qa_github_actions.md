# GitHub Actions quality gate QA — 2026-08-16

The repository now contains `.github/workflows/ui-quality.yml`. It is triggered by every push, pull request, and manual dispatch. The workflow uses Node 22 and pnpm 10.4.1, installs dependencies from the lockfile, runs the TypeScript check and production build, installs Chromium for Playwright, then runs `pnpm test:ui`.

When an automation test fails, the workflow uploads `playwright-report/` and `test-results/` for seven days. The YAML passes Prettier validation locally. The equivalent local quality sequence passed: `pnpm check`, `pnpm build`, and `pnpm test:ui` with 5/5 scenarios passing.

The workflow will appear in the repository's **Actions** tab after this configuration is pushed to GitHub.
