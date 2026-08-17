# UI automation testing — maybei showcase

This guide explains how to run, understand and debug the repository's browser tests. It is intentionally separate from the main README so that the commands and failure-report locations are easy to find during development and code review.

## Tooling and configuration

| Item | Location or value |
| --- | --- |
| Test package | `@playwright/test` **1.62.0** |
| Browser | Playwright Chromium |
| Test file | `tests/ui.spec.ts` |
| Configuration | `playwright.config.ts` |
| Local test server | Isolated Vite server on port `4173` |
| CI workflow | `.github/workflows/ui-quality.yml` |
| Required GitHub check | `Type check, build and UI tests` |

Install the browser binary once on a new machine before the first run:

```bash
pnpm install
pnpm exec playwright install chromium
```

## Test scope

The current suite has **seven** browser scenarios. It checks the core company-to-product journey, header navigation, Talio workflow navigation and pilot-form feedback, privacy-consent persistence, 404 recovery, mobile careers navigation, and the Talio full-bleed footer geometry that previously regressed.

| Scenario | Purpose |
| --- | --- |
| Home → Talio | Confirms the company story links into Talio and Talio renders its main heading. |
| Header navigation | Confirms Careers opens and the brand link returns to the home page. |
| Talio pilot form | Confirms required inputs accept data and the prototype confirmation state appears. |
| Talio footer regression | Confirms the footer starts at the left edge, occupies the client width and has a stable closing height. |
| Privacy consent | Confirms the consent UI can be dismissed and its choice persists after reload. |
| 404 recovery | Confirms an unknown route offers a working way back to the home page. |
| Mobile careers CTA | Confirms the primary CTA remains visible and reachable at `375 × 812`. |

## Commands

| Need | Command |
| --- | --- |
| Run all UI tests | `pnpm test:ui` |
| Run with visible Chromium | `pnpm test:ui:headed` |
| Run the single suite file | `pnpm exec playwright test tests/ui.spec.ts` |
| Run tests matching a title | `pnpm exec playwright test -g "footer"` |
| Debug in Playwright Inspector | `pnpm exec playwright test --debug` |
| Open the last HTML report | `pnpm exec playwright show-report playwright-report` |
| Open a captured trace | `pnpm exec playwright show-trace <path-to-trace.zip>` |

## Failure reports and diagnosis

When a local test fails, start with the focused test using `--headed` or `--debug`. Then inspect the generated artifacts below.

| Artifact | Location | How to use it |
| --- | --- | --- |
| HTML report | `playwright-report/index.html` | Open via `pnpm exec playwright show-report playwright-report`. |
| Screenshot, video and trace | `test-results/` | Locate the failing test folder; open the image/video or pass the trace ZIP to `show-trace`. |
| CI job output | GitHub → **Actions** → failed **UI quality gate** run | Expand the `quality` job and identify the failing command and test. |
| CI job summary | GitHub → **Actions** → any **UI quality gate** run | Shows whether the UI suite passed, failed or did not complete, plus where to find the report. |
| CI HTML report | `playwright-report` artifact on every workflow run | Download within fourteen days and open `playwright-report/index.html`. |
| Failure screenshots, video and trace | Inside the same `playwright-report` artifact when a test fails | Inspect the failing test folder under `test-results/`; open trace ZIP files with `show-trace`. |

The GitHub Actions workflow runs `pnpm check`, `pnpm build`, installs Playwright Chromium, runs `pnpm test:ui`, uploads the HTML Playwright report after every run and writes a concise UI-test result to the job summary. Failure-only screenshots, videos and traces are included in the same artifact when generated. The `main` branch requires this check and one approving pull-request review before merge.

## Online HTML view

After a successful `UI quality gate`, the [online Playwright report](https://olgakruglovam-arch.github.io/maybei-showcase/) is refreshed by the `Publish Playwright report` workflow. It is a convenience view of the latest successful run; use the linked GitHub Actions run for the exact commit, job summary and downloadable `playwright-report` artifact. If the site has not refreshed yet, open the Pages workflow run and wait for its deployment job to complete.
