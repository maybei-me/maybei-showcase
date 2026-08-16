# QA findings — первый проход

| ID | Приоритет | Сценарий | Статус | Наблюдение |
|---|---|---|---|---|
| QA-01 | Высокий | Отображение логотипа в header на `/` и `/careers` | Исправлен и перепроверен | Wordmark исправлен: `maybei` отображается без дублирования буквы `i` на обоих маршрутах. |
| QA-02 | Средний | Взаимодействие с карточками продуктов на `/` | Исправлен и перепроверен | Неактивные кнопки заменены на неинтерактивный визуальный индикатор; ложная кликабельность устранена. |
| QA-03 | Низкий | Переход `/` → `/careers` | Пройден | Навигация по ссылке Careers работает корректно. |
| QA-04 | Низкий | Консоль браузера после перехода между маршрутами | Пройден | Клиентских ошибок не обнаружено. |
| QA-05 | Низкий | DOM-проверка Careers: заголовки, ссылки, изображения и горизонтальное переполнение | Пройден | Один H1, логическая последовательность заголовков, доступные текстовые ссылки и отсутствие горизонтального переполнения. |
| QA-06 | Низкий | DOM-проверка главной страницы: изображения, заголовки и горизонтальное переполнение | Пройден | Все два изображения имеют alt-тексты, успешно загружены; структура содержит один H1; горизонтального переполнения нет. |
| QA-07 | Средний | Семантика интерактивных элементов главной страницы | Подтверждён | Четыре кнопки в карточках продуктов не выполняют действия и должны быть заменены неинтерактивным индикатором до появления продуктовых страниц. |
| QA-08 | Средний | Неизвестный маршрут | Исправлен и перепроверен | 404 приведена к Midnight Signal Matrix; сохранены понятный текст ошибки и однозначный путь возврата. |
| QA-09 | Низкий | Возврат с 404 на главную страницу | Пройден | Кнопка Go Home возвращает пользователя на `/`. |
| QA-10 | Низкий | Keyboard focus на интерактивных элементах | Пройден | `Tab` показывает контрастную лаймовую focus-рамку на брендовой ссылке; правило добавлено глобально. |
| QA-11 | Низкий | Production-сборка и TypeScript после исправлений | Пройден | `pnpm check` и `pnpm build` завершились успешно. Сборка сообщает только некритическое предупреждение о размере клиентского bundle. |
| QA-12 | Низкий | Мобильные версии `/`, `/careers` и 404 на ширине 375 px | Пройден | Все три экрана отрисованы без заметного переполнения и сохраняют читаемую иерархию. |
| QA-13 | Низкий | Финальная загрузка главной страницы и console errors | Пройден | Wordmark отображается корректно, а в консоли браузера ошибок нет. |

## Senior QA / Design / PO pass — 2026-08-16

Первый проход подтвердил рабочие маршруты `/`, `/careers` и fallback 404, а также наличие Talio-first CTA и audience-путей. На Careers обнаружена контентная несогласованность в названии роли `Product Manager — talio`, исправленная на `Product Manager — Talio`. Project-карточки на главной содержали визуальный arrow action без ссылки и без действия; это создавало ложное affordance и было удалено. Карьерные mailto используют единый адрес `careers@maybei.ai`, а footer main-site `hello@maybei.com` оставлен как общий контакт.

Дизайн-проверка подтверждает устойчивость midnight editorial direction: hero имеет один тезис, Talio proof и три audience CTA. В следующем проходе нужно подтвердить mobile wrapping длинных био и описаний, keyboard focus, console/network logs, contrast, reduced-motion и production build.

## Final browser pass observations

Published `/` loads with the Talio-first headline, proof metrics, audience CTAs, ordered founders, and all referenced images. Browser console is clean after load. Careers and 404 routes rendered with valid recovery paths. The main product UX now avoids false clickable arrows on non-linked cards; Talio is the only direct product anchor until product detail routes exist.

## Visual acceptance pass

Desktop screenshots confirm that the revised hero, Talio proof, audience CTA system, founder pair and Careers page hold their hierarchy without visible layout collapse. Mobile screenshots confirm vertical stacking and readable CTA/product content at 375 px. The 404 screen remains visually consistent and recoverable. One design issue was found in the decorative editorial spine: it still had four markers after the new fifth section was introduced; a fifth marker was added.

## Runtime confirmation

The current published home route loaded after the latest markup fix with no browser console output. Hero, Talio-first anchor, audience CTA links, founders order and Careers navigation remain present in the rendered page. The decorative spine now includes the fifth section marker in source.

## Talio preview fix

Причина дефекта подтверждена: `perspective(900px) rotateX(5deg) rotateY(-5deg)` искажал интерфейсный скриншот и создавал ощущение кривой картинки. Perspective удалена; контейнер получил фиксированное соотношение 16:9, изображение теперь показывается через `object-fit: contain` с аккуратным padding и без агрессивного crop. Desktop и mobile screenshots подтверждают ровную геометрию и читаемый preview.

## Thesis section fix

Причина смещения была в том, что `.section-rail` позиционируется absolute и не занимает grid-колонку, поэтому `.idea__copy` попадал в узкую первую колонку `.idea` и переносил заголовок по одному слову. Сетка заменена на block-flow с шириной copy до 1120px. Desktop и mobile screenshots подтверждают нормальную ширину заголовка, отсутствие выхода за секцию и сохранённую адаптивность.

## Senior UI/UX homepage acceptance

Главная проверена на desktop и 375 px mobile после системной доработки. Вертикальная coordinate axis теперь проявлена как сквозной маркер с пронумерованными ticks; каждая section rail дополнена signal-node. На фоне основных секций появилась сдержанная matrix-сетка без снижения читаемости. Product-панели стали асимметричными diagnostic panels с разными signal edges и статусной подачей, а audience CTA получила осмысленную разновысотность. Founder portraits получили общую холодную matrix-обработку, grid overlay и единые framing rules. Проверки desktop/mobile не показали переполнения или потерю главных CTA.
