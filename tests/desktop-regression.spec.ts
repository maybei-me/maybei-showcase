import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const viewports = [
  { name: "1280x800", width: 1280, height: 800 },
  { name: "1440x900", width: 1440, height: 900 },
  { name: "1920x1080", width: 1920, height: 1080 },
];
const outputDir = path.resolve("desktop-artifacts");

for (const viewport of viewports) {
  test(`desktop regression ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.screenshot({ path: path.join(outputDir, `home-${viewport.name}.png`), fullPage: false });

    await expect(page.locator(".site-header__nav")).toBeVisible();
    await expect(page.locator(".site-header__menu-toggle")).toBeHidden();
    await expect(page.locator(".site-header__cta")).toBeVisible();
    await expect(page.locator(".founder__pair")).toBeVisible();

    const metrics = await page.evaluate(() => {
      const founderCards = Array.from(document.querySelectorAll<HTMLElement>(".founder-card__image-wrap"));
      const header = document.querySelector<HTMLElement>(".site-header")?.getBoundingClientRect();
      return {
        viewportWidth: window.innerWidth,
        documentWidth: document.documentElement.scrollWidth,
        horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        headerHeight: header ? Math.round(header.height) : null,
        founderCardCount: founderCards.length,
        founderCardWidths: founderCards.map((card) => Math.round(card.getBoundingClientRect().width)),
        founderImagesLoaded: Array.from(document.querySelectorAll<HTMLImageElement>(".founder-card__image")).every((image) => image.complete && image.naturalWidth > 0),
      };
    });
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(path.join(outputDir, `metrics-${viewport.name}.json`), JSON.stringify(metrics, null, 2));
    expect(metrics.horizontalOverflow).toBe(false);
    expect(metrics.founderCardCount).toBe(2);
    expect(metrics.founderCardWidths[0]).toBeGreaterThan(400);
    expect(metrics.founderCardWidths[1]).toBeGreaterThan(400);
    expect(metrics.founderImagesLoaded).toBe(true);
  });
}
