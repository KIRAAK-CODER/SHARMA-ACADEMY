import { test, expect } from "@playwright/test";

const sizes = [
  { name: "desktop", width: 1280, height: 800 },
  { name: "mobile-375", width: 375, height: 812 },
];

for (const s of sizes) {
  test(`home page – ${s.name}`, async ({ page }) => {
    await page.setViewportSize({ width: s.width, height: s.height });
    await page.goto("/");

    // sections exist, in the right order
    const headings = await page.locator("main h1, main h2").allTextContents();
    expect(headings).toEqual([
      "EAMCET rank under 2,000 – from our classrooms",
      "Our EAMCET results",
      "Pick your child's class – see the batch timing",
      "Questions parents ask before joining Sharma Academy",
      "Talk to Sharma Academy about your child's batch",
    ]);
    await expect(page.getByText("15 years in Dilsukhnagar")).toBeVisible();
    await expect(page.locator("article")).toHaveCount(3 + 4);
    await expect(page.locator("details")).toHaveCount(5);

    // no overflow sideways
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(overflow).toBe(false);

    // content rules: no fees, no "seats limited", no demo class, no invented data
    const text = (await page.locator("body").innerText()).toLowerCase();
    expect(text).not.toContain("seats");
    expect(text).not.toContain("demo");
    expect(text).not.toMatch(/₹|rs\.|\bfees?\b/);
    expect(text).toContain("[pending]");

    // buttons
    await expect(page.getByRole("link", { name: /^WhatsApp us/ }).first()).toBeVisible();
    const sticky = page.getByLabel("Call or WhatsApp");
    if (s.width < 768) await expect(sticky).toBeVisible();
    else await expect(sticky).toBeHidden();

    await page.screenshot({ path: `test-results/home-${s.name}-top.png` });
    await page.screenshot({ path: `test-results/home-${s.name}-full.png`, fullPage: true });
  });
}
