import { expect, test } from '@playwright/test';

test.describe('maybei showcase core journeys', () => {
  test('home page introduces the company and links to Talio', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: /We build the AI layer/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /See the Talio proof/i })).toBeVisible();

    const talioLink = page.getByRole('link', { name: /Explore Talio/i });
    await expect(talioLink).toBeVisible();
    await talioLink.click();

    await expect(page).toHaveURL(/\/talio$/);
    await expect(page.getByRole('heading', { name: /Skills in/i })).toBeVisible();
  });

  test('header navigation opens careers and brand link returns home', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Careers', exact: true }).click();
    await expect(page).toHaveURL(/\/careers$/);
    await expect(page.getByRole('heading', { name: /Build things/i })).toBeVisible();

    await page.getByRole('link', { name: 'maybei home' }).click();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByRole('heading', { name: /We build the AI layer/i })).toBeVisible();
  });

  test('Talio exposes workflow anchor and company-pilot CTA', async ({ page }) => {
    await page.goto('/talio');

    await expect(page.getByText('LIVE PRODUCT', { exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: /Join the Talio pilot/i })).toHaveAttribute('href', 'https://talio.tech');

    await page.getByRole('link', { name: /See how it works/i }).click();
    await expect(page).toHaveURL(/\/talio#product$/);
    await expect(page.getByRole('heading', { name: /Every candidate deserves an answer/i })).toBeVisible();
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
});
