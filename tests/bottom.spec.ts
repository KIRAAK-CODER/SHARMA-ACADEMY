import { test, expect } from "@playwright/test";

// 767 = widest "small" screen (bar visible), 768 = tablet (bar hidden), 1280 = desktop
for (const width of [375, 600, 744, 767, 768, 820, 1024, 1280]) {
  test(`bottom of home page at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 812 });
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await page.waitForTimeout(200);

    // 1. no white strip: footer starts exactly where the CTA section ends
    const cta = await page.locator("section").last().boundingBox();
    const footer = await page.locator("footer").boundingBox();
    expect(Math.abs(footer!.y - (cta!.y + cta!.height))).toBeLessThanOrEqual(1);

    // 2. every footer line is really on top (nothing – bar, badge, anything – covers it)
    const n = await page.locator("footer p").count();
    for (let i = 0; i < n; i++) {
      const box = (await page.locator("footer p").nth(i).boundingBox())!;
      // check left, middle and right of the line
      for (const fx of [0.02, 0.5]) {
        const covered = await page.evaluate(
          ([x, y]) => !document.querySelector("footer")!.contains(document.elementFromPoint(x, y)),
          [box.x + box.width * fx, box.y + box.height / 2],
        );
        expect(covered, `footer line ${i} covered at ${width}px`).toBe(false);
      }
    }

    // 3. sticky bar: shown below 768px, hidden from 768px
    const bar = page.locator("[data-sticky-bar]");
    if (width < 768) {
      await expect(bar).toBeVisible();
      const lastLine = await page.locator("footer p").last().boundingBox();
      const barBox = await bar.boundingBox();
      expect(lastLine!.y + lastLine!.height).toBeLessThanOrEqual(barBox!.y);
    } else {
      await expect(bar).toBeHidden();
    }

    await page.screenshot({ path: `test-results/bottom-${width}.png` });
  });
}
