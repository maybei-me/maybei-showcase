# maybei — Make It Better

> **maybei** is a founder-led AI product company building the missing AI layer for systems people already depend on. **Talio** is the flagship product: a transparent AI hiring platform for candidates and employers.

The project is a public-facing corporate showcase with dedicated pages for the company, careers, and Talio. The design system is **Midnight Signal Matrix**: deep navy backgrounds, blue-to-violet signal accents, restrained lime actions, Manrope headlines, and DM Sans body copy.

| Environment | URL |
| --- | --- |
| Live site | `https://maybeishowca-wn86snno.manus.space/` |
| Local development | `http://localhost:3000` |

## Product scope

The home page introduces the maybei thesis, method, portfolio, founders, and careers direction. The portfolio currently contains Talio, Majlis, Smart Boots, and STRAWPOD. Talio has its own product page built around the promise of transparent hiring, a candidate/employer workflow, product interface evidence, and an early-company pilot call to action.

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

The UI suite covers the home page, Talio entry path, Careers navigation, Talio pilot CTA, 404 recovery, and a 375 px mobile viewport. The Playwright configuration starts an isolated Vite server on port `4173`, avoiding a conflict with the local development server.

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
| `client/src/index.css` | Global tokens, header, footer, theme foundation |

## Visual assets

Do **not** add large media files to `client/public` or `client/src`. Production assets are stored outside the repository during development, uploaded to managed storage, and referenced from the app with `/manus-storage/...` URLs.

1. Keep source assets in `/home/ubuntu/webdev-static-assets/`.
2. Upload them with `manus-upload-file --webdev <path>`.
3. Use the returned `/manus-storage/...` path in JSX or CSS.
4. Preserve approved mark geometry. Do not redraw or simplify the maybei M or the Talio mark.

## Brand guardrails

The company name is always written as **maybei**. The approved maybei identity uses a wide blue-to-violet M with a detached lime signal dot, a lowercase wordmark, and the line *Make It Better.*

Talio uses its own cream, dark-green, and lime product palette. The Talio project card uses a unique abstract **signal bridge** treatment: asymmetric blue and violet paths converge at a lime match point. This prevents visual repetition with Majlis, Smart Boots, and STRAWPOD.

## Publishing and GitHub

Create a checkpoint after a tested change. This project is configured to publish automatically whenever a checkpoint is created. The connected GitHub repository is shown in the project management panel under **Settings → GitHub**.

The repository includes `.github/workflows/ui-quality.yml`. GitHub Actions runs `pnpm check`, `pnpm build`, and `pnpm test:ui` on every push, pull request, and manually dispatched run. If the UI suite fails, the workflow uploads the Playwright report and test results as artifacts for seven days.

Before a checkpoint, confirm the following:

- `pnpm check` passes.
- `pnpm build` passes.
- Desktop and 375 px mobile layouts have been reviewed.
- All asset references resolve from `/manus-storage/`.
- No customer reviews, ratings, or testimonials are fabricated.

## Content updates

Keep copy factual and approved. In particular, do not invent Talio traction metrics, partner logos, company pilots, testimonials, LinkedIn URLs, or hiring claims. When adding a real partner, contact channel, metric, or social profile, use the precise source supplied by the founder.

## License

The source code is released under the MIT license as declared in `package.json`. Brand assets, names, copy, and product materials remain subject to their respective owner rights.
