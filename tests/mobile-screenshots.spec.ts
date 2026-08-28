import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const widths = [375, 390, 412];
const outputDir = path.resolve("mobile-artifacts/before");

for (const width of widths) {
  test(`mobile ${width}px layout`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/#founder", { waitUntil: "networkidle" });
    await page.screenshot({ path: path.join(outputDir, `founders-${width}.png`), fullPage: true });

    const metrics = await page.evaluate(() => ({
      viewportWidth: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth,
      horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      images: Array.from(document.images).map((image) => ({
        src: image.getAttribute("src"),
        loaded: image.complete && image.naturalWidth > 0,
      })),
    }));

    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(path.join(outputDir, `metrics-${width}.json`), JSON.stringify(metrics, null, 2));
    expect(metrics.horizontalOverflow, `Horizontal overflow at ${width}px`).toBe(false);
    expect(metrics.images.every((image) => image.loaded), "All images should load").toBe(true);
  });
}
