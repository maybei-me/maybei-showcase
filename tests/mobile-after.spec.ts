import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const widths = [375, 390, 412];
const outputDir = path.resolve("mobile-artifacts/after");

for (const width of widths) {
  test(`mobile fixes ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.screenshot({ path: path.join(outputDir, `home-${width}.png`), fullPage: false });

    const menuToggle = page.getByRole("button", { name: "Toggle navigation menu" });
    await expect(menuToggle).toBeVisible();
    const toggleBox = await menuToggle.boundingBox();
    expect(toggleBox?.width).toBeGreaterThanOrEqual(44);
    expect(toggleBox?.height).toBeGreaterThanOrEqual(44);

    await menuToggle.click();
    await expect(menuToggle).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Idea", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Method", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Founder", exact: true })).toBeVisible();
    await page.screenshot({ path: path.join(outputDir, `home-menu-open-${width}.png`), fullPage: false });

    for (const language of ["EN", "RU", "AR"]) {
      const languageButton = page.locator(".site-header__mobile-language").getByRole("button", { name: language });
      const box = await languageButton.boundingBox();
      expect(box?.width, `${language} width at ${width}px`).toBeGreaterThanOrEqual(44);
      expect(box?.height, `${language} height at ${width}px`).toBeGreaterThanOrEqual(44);
    }

    await page.getByRole("link", { name: "Founder", exact: true }).click();
    await expect(page).toHaveURL(/#founder$/);
    await page.locator("#founder").scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(outputDir, `founders-${width}.png`), fullPage: false });

    const metrics = await page.evaluate(() => ({
      viewportWidth: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      founderCards: document.querySelectorAll(".founder-card").length,
      founderImageLoaded: Array.from(document.querySelectorAll<HTMLImageElement>(".founder-card__image")).every((image) => image.complete && image.naturalWidth > 0),
    }));
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(path.join(outputDir, `metrics-${width}.json`), JSON.stringify(metrics, null, 2));
    expect(metrics.horizontalOverflow).toBe(false);
    expect(metrics.founderCards).toBe(2);
    expect(metrics.founderImageLoaded).toBe(true);
  });
}
