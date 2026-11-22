import { test, expect } from "@playwright/test";

const sizes = [
  { name: "desktop", width: 1280, height: 800 },
  { name: "mobile-375", width: 375, height: 812 },
];

for (const s of sizes) {
  test(`results page – ${s.name}`, async ({ page }) => {
    await page.setViewportSize({ width: s.width, height: s.height });
    await page.goto("/results");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Our EAMCET results");

    // 3 cards: photo, rank, name, year are all [PENDING]
    const cards = page.locator("article");
    await expect(cards).toHaveCount(3);
    for (let i = 0; i < 3; i++) {
      const c = cards.nth(i);
      await expect(c.getByText("[PENDING]")).toHaveCount(4);
      await expect(c.getByText("Student photo")).toBeVisible();
      await expect(c.locator("dt")).toHaveText(["Name", "Year"]);
      await expect(c.locator("img")).toHaveCount(0); // no photos until client sends them
      expect((await c.innerText()).match(/\d/)).toBeNull(); // no invented rank / year
    }

    // CTA below the cards with Call + WhatsApp
    const cardsBox = await cards.last().boundingBox();
    const call = page.getByRole("link", { name: /^Call now/ });
    const wa = page.getByRole("link", { name: /^WhatsApp us/ });
    await expect(call).toBeVisible();
    await expect(wa).toBeVisible();
    expect((await call.boundingBox())!.y).toBeGreaterThan(cardsBox!.y + cardsBox!.height);

    // content rules
    const text = (await page.locator("main").innerText()).toLowerCase();
    expect(text).not.toMatch(/₹|rs\.|\bfees?\b|seats|demo/);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(overflow).toBe(false);

    await page.screenshot({ path: `test-results/results-${s.name}-full.png`, fullPage: true });
  });
}
