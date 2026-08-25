# maybei — Make It Better

> **maybei** is a founder-led AI product company building the missing AI layer for systems people already depend on. **Talio** is the flagship product: a transparent AI hiring platform for candidates and employers.

The project is a public-facing corporate showcase with dedicated pages for the company, careers, and Talio. The design system is **Midnight Signal Matrix**: deep navy backgrounds, blue-to-violet signal accents, restrained lime actions, Manrope headlines, and DM Sans body copy.

| Environment | URL |
| --- | --- |
| Local development | `http://localhost:3000` |

## UI automation — run, scope and failure reports

> **Full guide:** [`AUTOMATION_TESTING.md`](./AUTOMATION_TESTING.md)

This repository uses **Playwright 1.62.0** through the `@playwright/test` package. Run the suite with `pnpm test:ui`; run it with a visible browser using `pnpm test:ui:headed`. The suite currently covers navigation, Talio pilot-form validation, cookie/privacy consent persistence, 404 recovery, mobile navigation and the full-bleed Talio footer regression check.

After a local failure, open `playwright-report/index.html` with `pnpm exec playwright show-report playwright-report`, then inspect screenshots, videos and traces under `test-results/`. On GitHub, every **UI quality gate** workflow run now writes a Playwright status section in its job summary and uploads the `playwright-report` artifact. Download it from the run summary to open the HTML report; any failure screenshots, videos and traces are included alongside it. Artifacts are retained for fourteen days.

## Product scope

The home page introduces the maybei thesis, method, portfolio, founders, and careers direction. The portfolio currently contains Talio, Majlis, Smart Boots, and STRAWPOD. Talio has its own product page built around the promise of transparent hiring, a candidate/employer workflow, product interface evidence, and an early-company pilot call to action. The page now includes an in-page pilot brief form with required company email and hiring-need fields. It currently validates and confirms the brief in the browser; a secure delivery endpoint or connected inbox must be supplied before accepting live submissions.

The shared shell includes a privacy consent banner. It stores either `accepted` or `essential` in `localStorage` under `maybei-privacy-choice` and does not enable advertising trackers.

| Route | Purpose |
| --- | --- |
| `/` | maybei company showcase and product portfolio |
| `/talio` | Talio product narrative and company-pilot CTA |
| `/careers` | Careers page and working principles |
| `/404` | Branded not-found screen |

## Technology

| Layer | Choice |
| --- | --- |
| UI | React 19 + TypeScript |
| Build tooling | Vite 7 |
| Routing | Wouter |
| Styling | Tailwind CSS 4 plus page-level CSS |
| Icons | Lucide React |
| Server bundle | Express + esbuild |
| Package manager | pnpm |

## Run locally

Use Node.js 22+ and pnpm 10+.

```bash
pnpm install
pnpm dev
```

The standard quality and production commands are:

```bash
pnpm check      # TypeScript type check
pnpm build      # Vite client build + server bundle
pnpm start      # Run the production server after build
pnpm preview    # Preview the Vite build locally
pnpm test:ui    # Run Playwright UI automation tests headlessly
pnpm test:ui:headed # Run UI tests with a visible browser
pnpm format     # Format source with Prettier
```

The UI suite covers the home page, Talio entry path, Careers navigation, Talio pilot CTA, cookie/privacy consent, the company-pilot form, 404 recovery, and a 375 px mobile viewport. The Playwright configuration starts an isolated Vite server on port `4173`, avoiding a conflict with the local development server.

### UI automation reference

The test runner is **Playwright 1.62.0**, installed as the development dependency `@playwright/test`. Test cases live in `tests/ui.spec.ts`; browser/server settings are in `playwright.config.ts`; the Chromium browser binary is installed separately through Playwright's installer.

| Need | Command or location |
| --- | --- |
| Run all UI tests headlessly | `pnpm test:ui` |
| Run with a visible Chromium window | `pnpm test:ui:headed` |
| Run one test file | `pnpm exec playwright test tests/ui.spec.ts` |
| Run one test by title | `pnpm exec playwright test -g "privacy"` |
| Debug in Playwright Inspector | `pnpm exec playwright test --debug` |
| Open the last HTML report | `pnpm exec playwright show-report playwright-report` |
| Raw failure screenshots, videos and traces | `test-results/` |
| Local HTML report | `playwright-report/index.html` |
| CI workflow | `.github/workflows/ui-quality.yml` |

When a test fails locally, first rerun the focused test with `--headed` or `--debug`. Then inspect `test-results/` for the screenshot, video and trace captured for the failed test. The trace can be opened with `pnpm exec playwright show-trace <path-to-trace.zip>`. The HTML report is generated after the run and can be opened with `pnpm exec playwright show-report playwright-report`.

On GitHub, open the failed **UI quality gate** run under the repository's **Actions** tab. Expand the failed `quality` job to see the failing step. The workflow uploads a `playwright-artifacts` artifact containing `playwright-report/` and `test-results/` whenever any step fails; download it from the run summary and inspect the same report or trace locally. The artifact retention is seven days.

The current protection rule for `main` requires the check named `Type check, build and UI tests` to pass. Changes also require an approving pull request review before merging.

On a new development machine, install the browser binary once before the first run:

```bash
pnpm exec playwright install chromium
```

## Project structure

```text
client/
  src/
    components/       # Shared navigation, logo, UI primitives
    contexts/         # Theme context
    pages/            # Home, Talio, Careers and 404 routes
    index.css         # Global tokens and common styles
    App.tsx           # Route registry
server/
  index.ts            # Production server entry point
shared/               # Shared compatibility types/constants
```

The main presentation files are:

| File | Responsibility |
| --- | --- |
| `client/src/pages/Home.tsx` | Main company page and project grid |
| `client/src/pages/home.css` | Home-page composition and project visuals |
| `client/src/pages/Talio.tsx` | Talio product page |
| `client/src/pages/talio.css` | Talio cream / green product system |
| `client/src/components/SiteHeader.tsx` | Global header and navigation |
| `client/src/components/PrivacyBanner.tsx` | Persisted cookie/privacy consent UI |
| `client/src/index.css` | Global tokens, header, footer, theme foundation |

## Visual assets

Do **not** add large media files to `client/public` or `client/src`. Production assets are stored outside the repository during development and referenced from the app with managed storage URLs.

1. Keep source assets in `/home/ubuntu/webdev-static-assets/`.
2. Upload them through the managed asset pipeline.
3. Use the returned storage path in JSX or CSS.
4. Preserve approved mark geometry. Do not redraw or simplify the maybei M or the Talio mark.

## Brand guardrails

The company name is always written as **maybei**. The approved maybei identity uses a wide blue-to-violet M with a detached lime signal dot, a lowercase wordmark, and the line *Make It Better.*

Talio uses its own cream, dark-green, and lime product palette. The Talio project card uses a unique abstract **signal bridge** treatment: asymmetric blue and violet paths converge at a lime match point. This prevents visual repetition with Majlis, Smart Boots, and STRAWPOD.

## Publishing and GitHub

Create a checkpoint after a tested change. This project is configured to publish automatically whenever a checkpoint is created. The connected GitHub repository is shown in the project management panel under **Settings → GitHub**. The repository is public and branch `main` is protected with the UI quality check plus required pull request review.

The repository includes `.github/workflows/ui-quality.yml`. GitHub Actions runs `pnpm check`, `pnpm build`, and `pnpm test:ui` on every push, pull request, and manually dispatched run. If the UI suite fails, the workflow uploads the Playwright report and test results as artifacts for seven days.

On every push to `main`, the same workflow also deploys `maybei.my` on the self-hosted runner attached to the server. The server keeps its own clone in `/opt/maybei-showcase`, and the deploy step runs `deploy/maybei/deploy.sh` on the exact commit SHA that triggered the workflow. No deploy SSH secrets are needed in GitHub for production.

Before a checkpoint, confirm the following:

- `pnpm check` passes.
- `pnpm build` passes.
- Desktop and 375 px mobile layouts have been reviewed.
- All asset references resolve from the managed storage layer.
- No customer reviews, ratings, or testimonials are fabricated.

## Content updates

Keep copy factual and approved. In particular, do not invent Talio traction metrics, partner logos, company pilots, testimonials, LinkedIn URLs, or hiring claims. When adding a real partner, contact channel, metric, or social profile, use the precise source supplied by the founder.

## License

The source code is released under the MIT license as declared in `package.json`. Brand assets, names, copy, and product materials remain subject to their respective owner rights.

## Online Playwright report

The latest successful UI quality gate is published as an HTML report at [the Playwright report site](https://olgakruglovam-arch.github.io/maybei-showcase/). The Pages workflow runs after a successful `UI quality gate`, downloads its `playwright-report` artifact, and replaces the online report with the latest result. The GitHub Actions run remains the source of truth for the commit, job summary, artifact archive and failure traces.
