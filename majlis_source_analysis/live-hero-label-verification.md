# Live Majlis hero label verification

Published route checked with cache-busting query after checkpoint `24cf7236`:

- Route: `/majlis?verify-labels=24cf7236`
- `MAJLIS COVER`: absent from the live DOM.
- `01 / 05`: absent from the live DOM.
- The AI-head image is visible in the published hero.

The source markup no longer includes a hero label element, and the corresponding CSS selectors have been removed. The absence is therefore viewport-independent; responsive preview and automated checks cover the mobile layout.
