# UI automation test report — 2026-08-16

The Playwright UI suite passed with **5/5 scenarios** in Chromium.

| Scenario | Coverage |
| --- | --- |
| Home → Talio | Home hero renders and `Explore Talio` reaches `/talio` |
| Header → Careers → Home | Desktop header navigation and brand return path |
| Talio workflow | Product status, pilot CTA URL and `#product` anchor |
| 404 recovery | Branded missing-route screen and back-to-home path |
| Mobile CTA | `375 × 812` career CTA remains visible and reaches Careers |

The suite uses `pnpm test:ui`; Playwright launches an isolated Vite server on port `4173`. Browser artifacts are ignored by Git, and Chromium installation is documented in `README.md`.
