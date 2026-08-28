import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const widths = [375, 390, 412];
const routes = ["/", "/careers", "/talio", "/majlis", "/smart-boots"];
const outputDir = path.resolve("mobile-artifacts/diagnostics");

for (const width of widths) {
  test(`mobile diagnostics ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    const results: Record<string, unknown> = {};

    for (const route of routes) {
      await page.goto(route, { waitUntil: "networkidle" });
      const key = route === "/" ? "home" : route.slice(1);
      await page.screenshot({ path: path.join(outputDir, `${key}-${width}.png`), fullPage: false });
      results[key] = await page.evaluate(() => {
        const rect = (selector: string) => {
          const element = document.querySelector<HTMLElement>(selector);
          if (!element) return null;
          const box = element.getBoundingClientRect();
          return { width: Math.round(box.width), height: Math.round(box.height), top: Math.round(box.top), bottom: Math.round(box.bottom) };
        };
        const interactive = Array.from(document.querySelectorAll<HTMLElement>("a, button, input, textarea, select"));
        return {
          viewport: window.innerWidth,
          documentWidth: document.documentElement.scrollWidth,
          horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
          header: rect(".site-header"),
          logo: rect(".site-header__brand"),
          cta: rect(".site-header__cta"),
          privacy: rect(".privacy-banner"),
          smallInteractiveTargets: interactive
            .map((element) => ({ tag: element.tagName, text: (element.textContent || element.getAttribute("aria-label") || "").trim().slice(0, 50), box: element.getBoundingClientRect() }))
            .filter(({ box }) => box.width > 0 && box.height > 0 && (box.width < 44 || box.height < 44))
            .map(({ tag, text, box }) => ({ tag, text, width: Math.round(box.width), height: Math.round(box.height) }))
            .slice(0, 20),
        };
      });
    }

    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(path.join(outputDir, `metrics-${width}.json`), JSON.stringify(results, null, 2));
    expect(Object.values(results).every((result) => !(result as { horizontalOverflow: boolean }).horizontalOverflow), `Horizontal overflow at ${width}px`).toBe(true);
  });
}
