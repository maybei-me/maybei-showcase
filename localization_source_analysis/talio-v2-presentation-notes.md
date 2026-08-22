# Talio v2 presentation notes

## Source

- `/home/ubuntu/upload/Talio—AIShouldOpenDoors(8).pdf`

## Core narrative extracted

- Cover thesis: **"AI should open doors — not close them."**
- Product promise: transparent access to work, framed as **Human hiring. Intelligent technology.**
- Problem framing: hiring is opaque for candidates and overloaded for employers; both sides lose time.
- Market framing: the hiring crisis is a shortage of verified signal, not merely a shortage of applicants.
- Platform framing: one transparent path to hire with the sequence **Discover → Match → Chat & Video → Hire**.
- Principle: speed without fairness is not progress.
- Responsible AI stance: no automated rejection, explainable matching, fairness/access checks, human review and appeal.
- Later slides extend the story into expert assessment, business model, pilot economics, trust layer, response timer, impact scorecard, and the Astana ask.

## Visual direction extracted from pages 1–5

- Palette matches Talio brand constraints: cream background, deep green blocks, lime highlights.
- Slides use large editorial headlines, generous whitespace, soft cards, rounded corners and sparse iconography.
- Page 1 uses a dark green cover with lime emphasis on the phrase **open doors**.
- Page 2 uses split candidate/employer cards with a pale highlight band for the conclusion.
- Page 3 uses stat cards on cream with a dark green summary band.
- Page 4 uses a card-based workflow row with arrows and one dark-emphasis step.
- Page 5 uses a principle section with one oversized message band and minimal icon support.

## Implications for Talio v2 route

- Keep current `/talio` untouched.
- Build `/talio-v2` as a presentation-led landing page, not as a replacement.
- Preserve Talio cream/deep-green palette while borrowing the presentation’s editorial hierarchy and card logic.
- Add a clear switch between `/talio` and `/talio-v2` so both versions remain parallel and reviewable.

## Additional findings from pages 6–10

- The responsible-AI section works as a dark inverse panel with four safeguards cards: no automated rejection, explainable matching, fairness/access checks, and human review/appeal.
- The expert-assessment section introduces a four-step trust proof: select expertise, three experts, independent review, verified badge.
- The pricing section is structured as two parallel card grids for candidates and employers, with one featured dark card for the hiring plan.
- The pilot-economics section uses a dense but still presentation-like metric layout: one dark summary strip followed by five numeric cards and a caution note.
- The competitive-landscape section uses a left-right split: existing hiring categories on the left, Talio trust layer on the right, plus a proof band below.

## Content candidates for Talio v2 sections

- Responsible AI safeguards
- Verified skills / expert assessment
- Business model overview
- Pilot economics with clear illustrative disclaimer
- Competitive landscape and Talio trust layer

## Presentation UI patterns worth reusing

- Repeated section eyebrow + oversized headline + one-sentence framing.
- Soft elevated cards on cream backgrounds.
- Dark green emphasis panels for thesis statements and trust systems.
- Lime accent reserved for one highlighted phrase, selected card or small divider.

## Talio v2 implementation architecture

Talio v2 will be a parallel, presentation-led public landing page with the following sequence: a dark-green thesis cover; candidate/employer problem cards; market signal cards; a transparent hiring path; the AI-open-doors principle; responsible-AI safeguards; verified-skills flow; a trust-layer comparison; an illustrative pilot economics block; an impact scorecard; and a pilot CTA. Every section will use the existing Talio cream, deep-green and lime palette rather than the parent maybei midnight system.

The route will be `/talio-v2`. It will have two-way links to the established `/talio` page and will identify itself as a **presentation edition** rather than a replacement. It will reuse existing uploaded Talio light/dark logo assets; its visual hero will be CSS-composed, so no unverified external image source is required. Content will be authored in English with a local EN/RU/AR presentation dictionary inside the page, preserving the current site-language behaviour without adding unrelated global translations.
