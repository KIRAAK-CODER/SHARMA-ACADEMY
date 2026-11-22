import { test, expect } from "@playwright/test";

const sizes = [
  { name: "desktop", width: 1280, height: 800 },
  { name: "mobile-375", width: 375, height: 812 },
];

for (const s of sizes) {
  test(`batches page – ${s.name}`, async ({ page }) => {
    await page.setViewportSize({ width: s.width, height: s.height });
    await page.goto("/batches");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Batches at Sharma Academy, Dilsukhnagar");
    await expect(page.locator("main h2")).toHaveText(["Tuition: Class 8-10", "Inter MPC & EAMCET coaching"]);

    // 3 + 3 cards, each with Timing/Medium/Subjects = [PENDING] and a Call for details button
    const cards = page.locator("article");
    await expect(cards).toHaveCount(6);
    for (let i = 0; i < 6; i++) {
      const c = cards.nth(i);
      await expect(c.locator("dt")).toHaveText(["Timing", "Medium", "Subjects"]);
      // Only the two Inter MPC cards (index 3, 4) have subjects; everything else is [PENDING]
      const subjects = i === 3 || i === 4 ? "Maths, Physics, Chemistry" : "[PENDING]";
      await expect(c.locator("dd")).toHaveText(["[PENDING]", "[PENDING]", subjects]);
      await expect(c.getByRole("link", { name: "Call for details" })).toBeVisible();
    }
    await expect(page.locator("section")).toHaveCount(2);
    await expect(page.locator("section").first().locator("article")).toHaveCount(3);

    // content rules: no fees, no invented timings/subjects/claims
    const text = (await page.locator("main").innerText()).toLowerCase();
    expect(text).not.toMatch(/₹|rs\.|\bfees?\b|seats|demo/);
    expect(text).not.toMatch(/\d{1,2}(:\d{2})?\s?(am|pm)/);
    expect(text).not.toMatch(/telugu medium|english medium/);
    expect(text.match(/maths/g)).toHaveLength(2); // only the 2 Inter MPC cards

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(overflow).toBe(false);

    await page.screenshot({ path: `test-results/batches-${s.name}-full.png`, fullPage: true });
  });
}
