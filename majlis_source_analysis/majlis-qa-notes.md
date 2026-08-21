
Mobile 375px preview keeps the portrait crop within the hero visual without horizontal overflow; the fixed privacy banner overlaps the lower viewport edge as a global overlay, not as a page layout defect. The crop remains available below the first viewport and retains the English-only screen treatment.

## Exact source-style crop correction

The generated crop was replaced with a new source-style portrait crop based on the user's red-box framing. The revised asset keeps the original English onboarding composition, phone frame, status bar, M mark, MAJLIS wordmark, subtitle, loading state and wave, without the annotation box or surrounding screens. Desktop 1280px and mobile 375px previews show the crop centered in the Majlis hero without distortion or horizontal overflow.

## Unique product evidence update

The Majlis evidence block now uses distinct English assets: the feature board, AI screens, Network screens, Community screens, Matches screen and Dashboard/Profile screen. Source grep confirms each referenced storage asset appears once in `Majlis.tsx`; no duplicate board/profile refs remain. Desktop full-page QA shows a balanced four-card evidence grid; mobile full-page QA stacks the cards vertically without horizontal overflow and keeps each caption readable at its section scale.

## Evidence hierarchy correction

The evidence section was simplified to match the user's proposed composition. The large feature now uses the Network board, the secondary grid contains only Community and AI screens, and Matches/Dashboard/Profile cards were removed from the visible evidence block. The trust section uses a restrained signal panel instead of another screenshot. Desktop and mobile full-page captures show the screens at a useful scale with no four-column micro-cards or horizontal overflow.
