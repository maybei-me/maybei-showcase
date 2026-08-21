# Multilingual QA record

## Initial Home verification

The shared header exposes EN, RU and AR controls. The Russian selection persisted in browser storage, updated document copy and retained the page layout. Initial review identified residual English strings in the cookie banner and compact product-tag labels; these must be added to the shared dictionary before final QA. Product screenshots remain intentionally English source evidence.

## Arabic RTL verification

Arabic selection persists with `lang="ar"` and `dir="rtl"`. Header actions, Arabic typography, legal content direction and cookie preferences render in RTL without changing the supplied product-image composition. The legal page review identified punctuation-split text nodes around bold brand and contact links; explicit dictionary entries cover those splits before the next validation pass.

## Responsive verification

Desktop and 375px screenshots were reviewed for Russian Home and Smart Boots, Arabic Home, Contact and Privacy & Cookies. The language control remains visible at mobile width; Arabic Contact and legal reading order remain right-to-left; Russian Smart Boots retains its black-and-lime layout and English source app evidence. English app screenshots are intentionally not translated because they are supplied product proof rather than live interface copy.

## Automated quality gate

TypeScript, production build, 8 server-side tests and 16 Playwright UI tests pass. The UI suite covers EN/RU persistence, Arabic `lang="ar"` and `dir="rtl"` switching, in addition to the pre-existing product, form, consent and mobile routes.

## Careers and product-page acceptance

The complete Careers page and the Talio, Majlis and Smart Boots routes were reviewed in Russian and Arabic at desktop and 375px mobile widths. The revised Russian copy uses concise B2B product language: **найм**, **процесс**, **пилот**, **отклик**, **сопоставление** and **профессиональные связи** are used consistently. Arabic follows a Modern Standard Arabic business register appropriate for UAE audiences, with right-to-left reading order, direct action CTAs and consistent terms for recruitment, product workflow, AI matching and sports performance.

English product names, supplied in-product screenshots, technical abbreviations such as AI, MVP, IMU and IoT, and universally used platform names such as LinkedIn remain intentionally untranslated. They are source evidence or established technical terms, rather than residual interface copy. The acceptance run found and corrected remaining visible headline fragments, Careers application copy, Talio workflow copy, Majlis audience paths and Smart Boots hardware/performance language.

## Talio live-gap correction

The first published inspection exposed remaining Talio English fragments in the Arabic form, consent sentence, section rails and footer. The corrective pass translated those strings and added route-level tests for the Arabic workflow rail, company email label and consent fragment. Desktop Arabic and Russian rechecks now show an intentional all-localised content layer; the embedded product screenshots remain English source evidence.

## Smart Boots full-copy acceptance

Smart Boots was re-read in Russian and Modern Standard Arabic from hero through closing: the signal cards, Field to phone flow, AI Coach prompt, hardware cards and final statement are now localised as a coherent product story. The visual evidence remains English only where it is a supplied app screenshot or a standard technical abbreviation. Desktop and 375px mobile checks confirm readable Russian copy, right-to-left Arabic flow and no residual English body paragraphs outside those evidence assets.

## Talio video-interview publication verification

The published Russian Talio route now exposes **Видеоинтервью** as workflow step 04, includes scheduling, reminder and live-meeting context in the step description, adds video interviews to the live-product line and carries the candidate context through the product-evidence narrative. The employer workflow now explicitly reads **Поиск → Сопоставление → Чат → Видеоинтервью → Найм**, with a separate structured video-interview benefit. Targeted Playwright coverage verifies the equivalent English, Russian and Modern Standard Arabic copy, plus Arabic RTL direction.

## Olga founder-profile publication verification

The live Russian founder card now uses the senior systems-and-quality narrative, including early risk visibility, decision discipline and responsibility by design. Its portrait source resolves to the new blue conference-background asset, while the English and Arabic equivalents remain covered by the shared dictionary and the targeted founder-card regression.

## Olga portrait framing correction

The conference portrait is now aligned to the top edge of the founders-card crop (`65% 0%` on desktop and `58% 0%` on mobile), preserving Olga’s complete face and head within the visible image frame; desktop and mobile previews confirm this composition. The profile conclusion now additionally states her commitment to ethical products and social-impact projects, and her long-term aspiration to become a goodwill ambassador; the complete message is localised in English, Russian and Modern Standard Arabic.

## Founders update rollback verification

Checkpoint `981c7055` was restored after the later investor-facing rewrite was not accepted. The restored local and published pages use the earlier blue-conference portrait asset and the approved prior Danil and Olga profile copy.

## Approved founders profile copy

The founders section now uses the user-approved people-centred narratives for both founders in English, Russian and Modern Standard Arabic. Danil’s profile covers his backend/full-stack development, music background in China and human-impact product philosophy; Olga’s profile covers quality as a way of thinking, the people behind products and meaningful technology. The Russian desktop pass confirms both profiles remain readable within their cards (275px and 281px bio heights respectively) while retaining the confirmed portrait assets.

The first published inspection after checkpoint `b5f38c26` still served the preceding Russian founders copy, so final live acceptance awaits normal production propagation. The local quality gates and regression suite have already passed for the approved profiles.

The second cache-busting read also returned the preceding copy immediately before the deployment-success event; a final post-deployment read is required before marking live acceptance complete.

The final published Russian route now contains the approved multi-paragraph profiles for both Danil and Olga. The verified live copy matches the accepted developer/musician/human-impact narrative for Danil and the quality-as-thinking, people-centred narrative for Olga.

## Danil profile shortening and Talio palette guardrail

Danil’s approved profile is now condensed to three paragraphs in English, Russian and Modern Standard Arabic, retaining the development, musician and human-impact themes; the Russian DOM check confirms three paragraphs and a 236px bio height. Talio’s cream/deep-green app-derived product palette is recorded as a locked visual constraint: any future layout refinements must retain that colour identity.

The combined founders completion pass confirms semantic visual order is Olga first (`01 / OLGA KRUGLOVA`) and Danil second (`02 / DANIL LOBANOV`) with their confirmed image sources intact. Both cards contain three bio paragraphs in the published layout candidate.

The initial two cache-busting reads after checkpoint `c495626f` returned the preceding published founder sequence; final live acceptance is pending normal rollout propagation. Local type, unit, Playwright and production-build gates passed for the combined update.

The final published Russian verification confirms the completed rollout: Olga appears first as `01 / OLGA KRUGLOVA`, Danil appears second as `02 / DANIL LOBANOV`, and Danil’s live bio contains the approved three-paragraph version.

## Talio video-interview rollback

The Russian development verification confirms the restored workflow uses `Interview` as step 04, with the original unified workflow and evidence language. The live product rail no longer lists video interviews, no explicit video-interview strings remain in the DOM, and the hero retains the approved product cream background (`rgb(254, 250, 244)`) and deep-green visual system.

## Talio v2 presentation edition

The parallel `/talio-v2` route was built from the attached *Talio — AI Should Open Doors* presentation. It preserves Talio’s cream, deep-green and lime product system, adds an English/Russian/Arabic local content model, and keeps the original `/talio` page accessible in both directions. Development verification passed with TypeScript, 8 server unit tests, 21 Playwright UI tests, a production build, and desktop/mobile visual review of both Talio routes.

After initial route propagation, the published Russian route `https://maybeishowca-wn86snno.manus.space/talio-v2?lang=ru` was verified live. It renders the presentation edition label, the Russian "AI должен открывать двери" thesis and multiple links back to the original `/talio` product page.

## Talio v2 user-first visual and localisation recheck

The in-development Talio v2 review confirms that the investment-oriented pilot economics and market-comparison blocks have been removed, leaving a user-first narrative centred on transparency, responsible AI, skills verification, response accountability and access to work. The Russian copy removes residual generic English fragments such as “product page”, “time-to-hire” and “ghosting”; Talio and AI remain intentionally unchanged as established product and technical names.

The approved Talio people visual now appears inside the v2 hero proof panel with a deep-green readability overlay. Desktop Russian and mobile Arabic passes retain the cream/deep-green/lime product palette, readable thesis hierarchy and the intended RTL direction. The first-visit cookie-consent panel remains visible by design until a visitor chooses a preference and may cover the lower hero in a clean browser session.

The first two production reads immediately after checkpoint `0f81be90`, including a cache-busting URL, still returned the preceding Talio v2 bundle: Russian navigation contained the older `product page` fragment and the hero did not yet show the people visual. The local quality gates passed; live acceptance requires a subsequent production propagation check before it is marked confirmed.

The subsequent published Russian route read completed successfully after propagation. It now displays **«Открыть исходную страницу продукта»**, exposes the Russian accessible description for the Talio people hero visual, shows the people visual in the hero panel, retains the user-first sections, and contains no pilot economics, CAC, churn, pricing or margin content. Live acceptance for checkpoint `0f81be90` is confirmed.

## Talio v2 people visual sizing correction

The v2 hero was adjusted after the first people-visual treatment stretched the supplied landscape asset into a tall proof panel. The corrected desktop composition retains the asset’s native `1412 × 1114` landscape ratio, displays the complete people visual without crop and enlarges the visual column so it balances the thesis rather than appearing as a narrow side tile. Mobile verification remains pending before publication.

## Talio v2 PO and senior design acceptance — in progress

The corrected Russian desktop hero now separates the message from the visual: the people asset is text-free, no longer obscured by a badge, index, caption or rule, and the primary product thesis remains the clearest element. On the 375px mobile pass, the reading order is clear—return path, product identity, presentation label, thesis, context—and the clean people visual follows as the next editorial block. The first-visit cookie panel naturally obscures the lower area until a visitor makes a preference choice; it does not overlap the product visual or headline.

The Arabic desktop and 375px mobile passes confirm `dir="rtl"` reading order, the Arabic product-return path and thesis, and the clean people visual with no embedded English labels. The text-free visual deliberately remains neutral across language variants, while the live page message, CTAs, metadata and accessible description are supplied through the EN/RU/AR content model.

The first production read immediately after checkpoint `74110e55` still returned the preceding hero bundle. Follow-up browser capture was unavailable due a screenshot-upload issue, and a direct response check was terminated after timing out. Local EN/RU/AR and RTL acceptance, targeted regression, full test suite and build succeeded; the published checkpoint is awaiting normal edge propagation confirmation.

## Talio v2 people-first micro-copy refinement

The people visual now retains one intentionally small meaning layer rather than returning the earlier crowded treatment. English uses **“People first.”**, Russian uses the natural product statement **«Люди — прежде всего.»**, and Arabic uses the concise Modern Standard Arabic **«الناس أولاً.»**. The copy sits in the empty dark-green zone of the visual, leaving both portrait frames unobscured; Arabic keeps its native right-to-left text direction while retaining that same safe zone. TypeScript, the focused Talio v2 multilingual regression, all 8 server tests, the full 21-test Playwright suite and the production build passed after this refinement.

## Talio v2 HR task-based usability review

An expert desk-based review used representative recruiter and hiring-manager tasks rather than live participant interviews. The first task—understanding Talio’s promise—now resolves through the thesis and its immediately visible supporting copy. The headline was reduced at wide desktop so it holds three lines rather than four, bringing the promise, brief explanation and primary action into the initial hero viewport.

The second task—starting a relevant conversation for a team—identified the generic pilot label as less direct than a team-oriented invitation. The primary action now reads **“Explore Talio for your team”**, **«Посмотреть Talio для вашей команды»** and **«اكتشفوا Talio لفريقكم»**. The third task—checking the original product context—remains supported by the visible return path to the original Talio page. No blocking hierarchy or localisation issue remained in desktop or mobile review; follow-up live user interviews would validate these heuristic findings.

## Founders live-release mismatch — 19 August 2026

The public Home page checked after checkpoint `c797813d` still returned the preceding founders bundle: Olga appeared first as `01`, Danil second as `02`, and the page markup reflected the older card order. This differs from the local, tested Danil-first reveal-card implementation. The discrepancy is being treated as a production propagation/cache issue and requires a fresh live verification after the next publication action.

After the reissued checkpoint `4d2de1a8` completed its propagation window, a cache-busted public verification confirmed the corrected founders DOM: Danil is now `01`, Olga is `02`, and both cards expose the intended `View profile` controls in their default state. The live release now matches the tested Danil-first implementation.
