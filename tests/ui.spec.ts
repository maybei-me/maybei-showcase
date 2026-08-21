import { expect, test } from '@playwright/test';

test.describe('maybei showcase core journeys', () => {
  test('language switcher persists Russian and applies Arabic RTL direction', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'RU' }).click();
    await expect(page.getByRole('heading', { name: /Мы создаём AI-слой/i })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Связаться с нами', exact: true })).toBeVisible();
    await page.reload();
    await expect(page.getByRole('heading', { name: /Мы создаём AI-слой/i })).toBeVisible();

    await page.getByRole('button', { name: 'AR' }).click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.getByRole('heading', { name: /نبني طبقة الذكاء الاصطناعي/i })).toBeVisible();
  });

  test('Arabic home mirrors editorial signal rails and forward-arrow affordances', async ({ page }) => {
    await page.goto('/?lang=ar');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');

    const spine = page.locator('.home-spine');
    const spineBox = await spine.boundingBox();
    if (!spineBox) throw new Error('Arabic home signal spine has no rendered dimensions');
    expect(spineBox.x).toBeGreaterThan(700);

    await expect.poll(() => page.locator('.idea .section-rail').evaluate((element) => getComputedStyle(element).direction)).toBe('rtl');
    await expect.poll(() => page.locator('.product-card__detail-link svg').first().evaluate((element) => getComputedStyle(element).transform)).toContain('matrix(-1');
  });

  test('Careers and product routes expose reviewed RU and Arabic business copy', async ({ page }) => {
    await page.goto('/careers?lang=ru');
    await expect(page.getByRole('heading', { name: /Создавайте то,/i })).toBeVisible();
    await expect(page.getByText('Мы используем эти данные только для рассмотрения и ответа на ваш отклик.')).toBeVisible();

    await page.goto('/talio?lang=ru');
    await expect(page.getByRole('heading', { name: /Навыки — в дело/i })).toBeVisible();
    await expect(page.getByText('Меньше неопределённости.')).toBeVisible();

    await page.goto('/talio?lang=ar');
    await expect(page.getByText('مسار العمل')).toBeVisible();
    await expect(page.getByText('البريد الإلكتروني للشركة')).toBeVisible();
    await expect(page.getByText('وأوافق على أن تستخدم maybei هذه البيانات للرد.')).toBeVisible();

    await page.goto('/majlis?lang=ru');
    await expect(page.getByText('«Большинству людей не нужен лишний шум. Им нужен понятный следующий шаг — и человек, с которым можно его сделать».')).toBeVisible();

    await page.goto('/majlis?lang=ar');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.getByText('أبحث عن اتجاه')).toBeVisible();

    await page.goto('/smart-boots?lang=ar');
    await expect(page.getByRole('heading', { name: /لعبتك/i })).toBeVisible();
    await expect(page.getByText('سرعة بلا تخمين.')).toBeVisible();
    await expect(page.getByText('يمنح الموقع والعمر والسياق البدني كل مباراة خط أساس ذا معنى.')).toBeVisible();

    await page.goto('/smart-boots?lang=ru');
    await expect(page.getByText('Позиция, возраст и физические параметры задают понятную точку отсчёта для каждой игры.')).toBeVisible();
    await expect(page.getByText('Встроенный модуль записывает движения офлайн, не прерывая игру.')).toBeVisible();
  });

  test('home page introduces the company and links to Talio', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: /We build the AI layer/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /See the Talio proof/i })).toBeVisible();

    const talioLink = page.getByRole('link', { name: /Explore Talio/i });
    await expect(talioLink).toBeVisible();
    await talioLink.click();

    await expect(page).toHaveURL(/\/talio$/);
    await expect(page.getByRole('heading', { name: /Skills in/i })).toBeVisible();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(8);
  });

  test('header navigation opens careers and brand link returns home', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('.site-header__nav')).not.toContainText('Products');
    await expect(page.locator('#products')).toBeVisible();

    await page.getByRole('link', { name: 'Careers', exact: true }).click();
    await expect(page).toHaveURL(/\/careers$/);
    await expect(page.getByRole('heading', { name: /Build things/i })).toBeVisible();

    await page.getByRole('link', { name: 'maybei home' }).click();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByRole('heading', { name: /We build the AI layer/i })).toBeVisible();
  });

  test('Majlis product page opens from the portfolio and shows product proof', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: /Explore Majlis/i }).click();
    await expect(page).toHaveURL(/\/majlis$/);
    await expect(page.getByRole('heading', { name: /The right people can change the direction of a life/i })).toBeVisible();
    await expect(page.getByText('Find a project that gives your skills somewhere to go.', { exact: true })).toBeVisible();
    await expect(page.getByAltText(/English Majlis AI screens showing interests selection/i)).toBeVisible();
  });

  test('Smart Boots opens from the portfolio and presents football performance proof', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: /Explore Smart Boots/i }).click();
    await expect(page).toHaveURL(/\/smart-boots$/);
    await expect(page.getByRole('heading', { name: /Your game\. Upgraded/i })).toBeVisible();
    await expect(page.getByText('Measure what changes the match.', { exact: true })).toBeVisible();
    await expect(page.getByAltText(/Smart Boots concept with football boot sensor/i)).toBeVisible();

    await page.getByRole('link', { name: /Explore the system/i }).click();
    await expect(page).toHaveURL(/\/smart-boots#signals$/);
  });

  test('Majlis AI, Network and Community screens expand and close accessibly', async ({ page }) => {
    await page.goto('/majlis');

    await page.getByRole('button', { name: 'Expand AI screens' }).click();
    const aiDialog = page.getByRole('dialog', { name: /AI screens expanded preview/i });
    await expect(aiDialog).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(aiDialog).toHaveCount(0);

    await page.getByRole('button', { name: 'Expand Network screens' }).click();
    const dialog = page.getByRole('dialog', { name: /Network screens expanded preview/i });
    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).toHaveCount(0);

    await page.getByRole('button', { name: 'Expand Community screens' }).click();
    const communityDialog = page.getByRole('dialog', { name: /Community screens expanded preview/i });
    await expect(communityDialog).toBeVisible();
    await page.locator('.majlis-lightbox__close').click();
    await expect(communityDialog).toHaveCount(0);
  });

  test('Majlis hero has no helper label, responds to pointer movement and reaches audience paths', async ({ page }) => {
    await page.goto('/majlis');
    await expect(page.getByText('MAJLIS COVER', { exact: true })).toHaveCount(0);

    const cover = page.getByAltText(/Majlis AI Network for Human Potential cover/i);
    const initialTransform = await cover.evaluate((element) => getComputedStyle(element).transform);
    await page.locator('.majlis-hero__visual--cover').hover({ position: { x: 80, y: 40 } });
    await expect.poll(() => cover.evaluate((element) => getComputedStyle(element).transform)).not.toBe(initialTransform);

    await page.getByRole('link', { name: /Find where you fit/i }).click();
    await expect(page).toHaveURL(/\/majlis#paths$/);
    await expect(page.getByRole('heading', { name: /Start with what you are trying to do/i })).toBeVisible();
  });

  test('Talio exposes workflow anchor and company-pilot form', async ({ page }) => {
    await page.goto('/talio');

    await expect(page.getByText('LIVE PRODUCT', { exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: /Join the Talio pilot/i })).toHaveAttribute('href', 'https://talio.tech');

    await page.getByRole('link', { name: /See how it works/i }).click();
    await expect(page).toHaveURL(/\/talio#product$/);
    await expect(page.getByRole('heading', { name: /Every candidate deserves an answer/i })).toBeVisible();
    await page.locator('.talio-footer').getByRole('link', { name: 'Privacy' }).click();
    await expect(page).toHaveURL(/\/privacy-cookies$/);
    await page.goBack();
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({ status: 201, contentType: 'application/json', body: JSON.stringify({ ok: true, status: 'created', message: 'Thank you — your message has been received.' }) });
    });
    await page.getByLabel('Your name').fill('Alex Morgan');
    await page.getByLabel('Company email').fill('pilot@example.com');
    await page.getByLabel('Company', { exact: true }).fill('Field FC');
    await page.getByLabel('What are you hiring for?').fill('Engineering and product');
    await page.getByRole('checkbox', { name: /I have read the Privacy/i }).check();
    await page.getByRole('button', { name: /Request a pilot conversation/i }).click();
    await expect(page.getByRole('status')).toContainText(/message has been received/i);
  });

  test('Talio v2 keeps the presentation edition parallel to the original product page', async ({ page }) => {
    await page.goto('/talio-v2');
    await expect(page.getByRole('heading', { name: /AI should open doors/i })).toBeVisible();
    await expect(page.getByText('Presentation edition · v2', { exact: true }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Explore Talio for your team/i })).toBeVisible();
    await expect(page.getByText('Responsible AI', { exact: true })).toBeVisible();
    await expect(page.getByText('A clearer path for people on both sides.', { exact: true })).toBeVisible();
    const peopleVisual = page.getByAltText('Talio visual featuring people');
    await expect(peopleVisual).toBeVisible();
    await expect(peopleVisual).toHaveAttribute('src', /talio-built-for-people/);
    const peopleVisualBox = await peopleVisual.boundingBox();
    if (!peopleVisualBox) throw new Error('Talio people visual has no rendered dimensions');
    expect(peopleVisualBox.width / peopleVisualBox.height).toBeGreaterThan(1.2);
    expect(peopleVisualBox.width / peopleVisualBox.height).toBeLessThan(1.3);
    await expect(page.locator('.talio-v2__hero-proof-mark')).toHaveCount(0);
    await expect(page.locator('.talio-v2__hero-proof-line')).toHaveCount(0);
    await expect(page.locator('.talio-v2')).not.toContainText(/Illustrative pilot case|Employer CAC|Gross margin/);
    await page.getByRole('link', { name: /View original product page/i }).first().click();
    await expect(page).toHaveURL(/\/talio$/);

    await page.getByRole('link', { name: /View presentation edition/i }).click();
    await expect(page).toHaveURL(/\/talio-v2$/);

    await page.goto('/talio-v2?lang=ru');
    await expect(page.getByRole('heading', { name: /AI должен открывать двери/i })).toBeVisible();
    await expect(page.getByText('Версия по презентации · v2', { exact: true }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Посмотреть Talio для вашей команды/i })).toBeVisible();
    await expect(page.getByText('Открыть исходную страницу продукта', { exact: true }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Единый прозрачный процесс найма.' })).toBeVisible();
    await expect(page.getByText('Прозрачность на всём пути', { exact: true }).first()).toBeVisible();
    await expect(page.getByAltText('Визуал Talio с людьми')).toBeVisible();
    await expect(page.locator('.talio-v2')).not.toContainText(/product page|CAC|churn|Валовая маржа/);

    await page.goto('/talio-v2?lang=ar');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.getByRole('heading', { name: /ينبغي للذكاء الاصطناعي أن يفتح الأبواب/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /اكتشفوا Talio لفريقكم/i })).toBeVisible();
    await expect(page.getByText('ما يبقى ظاهراً', { exact: true }).first()).toBeVisible();
    await expect(page.getByAltText('صورة Talio لأشخاص')).toBeVisible();
  });

  test('Talio v2 language controls switch EN, RU and Arabic copy interactively', async ({ page }) => {
    await page.goto('/talio-v2?lang=en');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.getByRole('heading', { name: /AI should open doors/i })).toBeVisible();

    await page.getByRole('button', { name: 'RU' }).click();
    await expect(page).toHaveURL(/lang=ru/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
    await expect(page.getByRole('heading', { name: /AI должен открывать двери/i })).toBeVisible();

    await page.getByRole('button', { name: 'AR' }).click();
    await expect(page).toHaveURL(/lang=ar/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.getByRole('heading', { name: /ينبغي للذكاء الاصطناعي أن يفتح الأبواب/i })).toBeVisible();

    await page.getByRole('button', { name: 'EN' }).click();
    await expect(page).toHaveURL(/lang=en/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
    await expect(page.getByRole('heading', { name: /AI should open doors/i })).toBeVisible();
  });

  test('Talio v2 uses the browser language only before a visitor chooses a language', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.removeItem('maybei-language');
      Object.defineProperty(navigator, 'languages', { configurable: true, value: ['ru-RU', 'en-US'] });
      Object.defineProperty(navigator, 'language', { configurable: true, value: 'ru-RU' });
    });
    await page.goto('/talio-v2');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
    await expect(page.getByRole('heading', { name: /AI должен открывать двери/i })).toBeVisible();
  });

  test('Talio v2 records language context and explicit language selection without personal data', async ({ page }) => {
    await page.addInitScript(() => {
      (window as Window & { __languageAnalyticsEvents?: unknown[]; umami?: { track: (name: string, data: Record<string, string>) => void } }).__languageAnalyticsEvents = [];
      (window as Window & { __languageAnalyticsEvents: unknown[]; umami: { track: (name: string, data: Record<string, string>) => void } }).umami = {
        track: (name, data) => (window as Window & { __languageAnalyticsEvents: unknown[] }).__languageAnalyticsEvents.push({ name, data }),
      };
    });
    await page.goto('/talio-v2?lang=en');
    await page.getByRole('button', { name: 'RU' }).click();
    await expect.poll(() => page.evaluate(() => (window as Window & { __languageAnalyticsEvents: unknown[] }).__languageAnalyticsEvents)).toEqual([
      { name: 'language_context', data: { browser_language: 'en', selected_language: 'en' } },
      { name: 'language_selected', data: { language: 'ru', source: 'manual' } },
    ]);
  });

  test('Olga founder profile uses the approved people-centred quality narrative and blue conference portrait', async ({ page }) => {
    await page.goto('/');
    const danil = page.locator('.founder-card--danil');
    const olga = page.locator('.founder-card--olga');
    const founderCards = page.locator('.founder-card');
    await olga.scrollIntoViewIfNeeded();
    await expect(founderCards.first()).toHaveClass(/founder-card--danil/);
    await expect(founderCards.nth(1)).toHaveClass(/founder-card--olga/);
    await expect(founderCards.first().getByText('01 / DANIL LOBANOV', { exact: true })).toBeVisible();
    await expect(founderCards.nth(1).getByText('02 / OLGA KRUGLOVA', { exact: true })).toBeVisible();
    await expect(danil.locator('.founder-card__bio > p')).toHaveCount(3);
    await danil.getByRole('button', { name: /View profile/i }).click();
    await expect(danil).toHaveAttribute('data-revealed', 'true');
    const danilBioLines = danil.locator('.founder-card__bio p');
    for (const bioLine of await danilBioLines.all()) {
      await bioLine.scrollIntoViewIfNeeded();
      await expect(bioLine).toBeVisible();
    }
    await olga.getByRole('button', { name: /View profile/i }).click();
    await expect(olga).toHaveAttribute('data-revealed', 'true');
    await expect(olga.getByAltText('Olga Kruglova, founder of maybei')).toHaveAttribute('src', /maybei-founder-olga-blue-conference/);
    await expect(olga.getByText(/With 15\+ years in software quality/i)).toBeVisible();
    await expect(olga.getByText(/quality not as a final check, but as a way of thinking/i)).toBeVisible();
    await expect(olga.getByText(/people behind every product/i)).toBeVisible();
    await expect(olga.getByText(/products with meaning/i)).toBeVisible();
    await expect(olga.getByAltText('Olga Kruglova, founder of maybei')).toHaveCSS('object-position', '65% 0%');

    await page.goto('/?lang=ru');
    await page.locator('.founder-card--danil .founder-card__reveal').click();
    await expect(page.getByText(/Основатель и ведущий разработчик с 5 годами коммерческого опыта/i)).toBeVisible();
    await expect(page.getByText(/пять лет был музыкантом в Китае/i)).toBeVisible();
    await page.locator('.founder-card--olga .founder-card__reveal').click();
    await expect(page.getByText(/Более 15 лет в области качества ПО/i)).toBeVisible();
    await expect(page.getByText(/качество не финальной проверкой, а образом мышления/i)).toBeVisible();
    await expect(page.getByText(/люди, стоящие за каждым продуктом/i)).toBeVisible();

    await page.goto('/?lang=ar');
    await page.locator('.founder-card--danil .founder-card__reveal').click();
    await expect(page.getByText(/مؤسس ومطور رئيسي يتمتع بخمس سنوات/i)).toBeVisible();
    await expect(page.getByText(/خمس سنوات موسيقياً في الصين/i)).toBeVisible();
    await page.locator('.founder-card--olga .founder-card__reveal').click();
    await expect(page.getByText(/أرى الجودة لا كفحص نهائي/i)).toBeVisible();
    await expect(page.getByText(/الناس وراء كل منتج/i)).toBeVisible();
  });

  test('Privacy, terms and contact form provide an explicit consent path', async ({ page }) => {
    await page.goto('/privacy-cookies');
    await expect(page.getByRole('heading', { name: /Clear about/i })).toBeVisible();
    await expect(page.getByText('maybei-privacy-choice', { exact: true })).toBeVisible();
    await page.getByRole('link', { name: /Terms/i }).last().click();
    await expect(page).toHaveURL(/\/terms$/);
    await expect(page.getByRole('heading', { name: /Built with intent/i })).toBeVisible();

    await page.goto('/contact');
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({ status: 201, contentType: 'application/json', body: JSON.stringify({ ok: true, status: 'created', message: 'Thank you — your message has been received.' }) });
    });
    await page.getByLabel('Name').fill('Alex Morgan');
    await page.getByLabel('Email').fill('alex@example.com');
    await page.getByLabel('What would you like to make better?').fill('I would like to discuss an applied AI partnership.');
    await page.getByRole('checkbox', { name: /I have read the Privacy/i }).check();
    await page.getByRole('button', { name: /Send message/i }).click();
    await expect(page.getByRole('status')).toContainText(/message has been received/i);
  });

  test('Talio closes with a full-bleed footer on the page grid', async ({ page }) => {
    await page.goto('/talio');
    const footer = page.locator('footer.talio-footer');
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();

    const geometry = await footer.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return { left: Math.round(rect.left), width: Math.round(rect.width), height: Math.round(rect.height), clientWidth: document.documentElement.clientWidth };
    });
    expect(geometry.left).toBe(0);
    expect(geometry.width).toBe(geometry.clientWidth);
    expect(geometry.height).toBeGreaterThanOrEqual(150);
  });

  test('Careers replaces direct email with an in-page candidate application form', async ({ page }) => {
    await page.goto('/careers');

    await page.getByRole('button', { name: /AI \/ ML Engineer/i }).click();
    await expect(page.getByRole('heading', { name: /Tell us where/i })).toBeVisible();
    await expect(page.getByLabel('Role')).toHaveValue('AI / ML Engineer');

    await page.getByLabel('Full name').fill('Alex Morgan');
    await page.getByLabel('Email address').fill('alex@example.com');
    await page.getByLabel('What would you like to make better?').fill('I want to help make hiring workflows more transparent.');
    await page.getByRole('checkbox', { name: /I have read the Privacy/i }).check();
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({ status: 201, contentType: 'application/json', body: JSON.stringify({ ok: true, status: 'created', message: 'Thank you — your message has been received.' }) });
    });
    await page.getByRole('button', { name: /Send application/i }).click();

    await expect(page.getByRole('status')).toContainText(/application has been received/i);
  });

  test('privacy consent can be dismissed and persists after reload', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('dialog', { name: /Privacy preferences/i })).toBeVisible();
    const banner = page.getByRole('dialog', { name: /Privacy preferences/i });
    const detailsButton = banner.getByRole('button', { name: /Privacy details/i });
    await expect(detailsButton).toHaveAttribute('aria-expanded', 'false');
    await detailsButton.click();
    await expect(detailsButton).toHaveAttribute('aria-expanded', 'true');
    await expect(banner.getByRole('link', { name: /Privacy & Cookies Notice/i })).toBeVisible();
    await banner.getByRole('button', { name: /Hide banner/i }).click();
    await expect(page.getByRole('dialog', { name: /Privacy preferences/i }).getByRole('button', { name: /Show banner/i })).toBeVisible();
    await page.getByRole('dialog', { name: /Privacy preferences/i }).getByRole('button', { name: /Show banner/i }).click();
    await expect(page.getByRole('dialog', { name: /Privacy preferences/i }).getByRole('button', { name: /Hide banner/i })).toBeVisible();
    await page.getByRole('button', { name: /Essential only/i }).click();
    await expect(page.getByRole('dialog', { name: /Privacy preferences/i })).toHaveCount(0);
    await page.reload();
    await expect(page.getByRole('dialog', { name: /Privacy preferences/i })).toHaveCount(0);
  });

  test('unknown routes offer a clear way back to the company site', async ({ page }) => {
    await page.goto('/missing-route');

    await expect(page.getByText('404 / LOST SIGNAL', { exact: true })).toBeVisible();
    await page.getByRole('link', { name: /Back to maybei/i }).last().click();
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe('mobile UI safety', () => {
  test.use({ viewport: { width: 375, height: 812 }, isMobile: true });

  test('primary career CTA remains visible and reachable on mobile', async ({ page }) => {
    await page.goto('/');

    const careerCta = page.getByRole('link', { name: /Build with us/i });
    await expect(careerCta).toBeVisible();
    await careerCta.click();

    await expect(page).toHaveURL(/\/careers$/);
    await expect(page.getByRole('heading', { name: /Build things/i })).toBeVisible();
  });

  test('Smart Boots keeps the concept proof and performance headline reachable on mobile', async ({ page }) => {
    await page.goto('/smart-boots');

    await expect(page.getByRole('heading', { name: /Your game\. Upgraded/i })).toBeVisible();
    await expect(page.getByAltText(/Smart Boots concept with football boot sensor/i)).toBeVisible();
  });

  test('Olga portrait keeps the full face framing on mobile', async ({ page }) => {
    await page.goto('/');
    const portrait = page.locator('.founder-card--olga .founder-card__image');
    await portrait.scrollIntoViewIfNeeded();
    await expect(portrait).toHaveCSS('object-position', '58% 0%');
  });

  test('approved founder bios remain within the mobile viewport', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('.founder-card');
    await cards.nth(1).scrollIntoViewIfNeeded();
    const bounds = await cards.evaluateAll((elements) => elements.map((element) => {
      const rect = element.getBoundingClientRect();
      return { left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width), viewport: window.innerWidth };
    }));
    for (const bound of bounds) {
      expect(bound.left).toBeGreaterThanOrEqual(0);
      expect(bound.right).toBeLessThanOrEqual(bound.viewport);
      expect(bound.width).toBeGreaterThan(0);
    }
  });
});


test('founder cards expose visible focus and hover states', async ({ page }) => {
  await page.goto('/');
  const danil = page.locator('.founder-card--danil');
  const olga = page.locator('.founder-card--olga');
  await danil.scrollIntoViewIfNeeded();
  const danilReveal = danil.getByRole('button', { name: /View profile/i });
  await danilReveal.focus();
  await expect(danilReveal).toBeFocused();
  await expect(danil.locator('.founder-card__bio')).toHaveCSS('opacity', '1');
  await olga.hover();
  await expect(olga.locator('.founder-card__bio')).toHaveCSS('opacity', '1');
});

test('founder profile reveals by tap on mobile', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 375, height: 812 }, isMobile: true });
  const page = await context.newPage();
  await page.goto('/');
  const olga = page.locator('.founder-card--olga');
  await olga.scrollIntoViewIfNeeded();
  await olga.getByRole('button', { name: /View profile/i }).click();
  await expect(olga).toHaveAttribute('data-revealed', 'true');
  await expect(olga.locator('.founder-card__bio')).toHaveCSS('opacity', '1');
  await context.close();
});
