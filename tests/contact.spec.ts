import { test, expect } from "@playwright/test";

const sizes = [
  { name: "desktop", width: 1280, height: 800 },
  { name: "mobile-375", width: 375, height: 812 },
];

for (const s of sizes) {
  test(`contact page – ${s.name}`, async ({ page }) => {
    await page.setViewportSize({ width: s.width, height: s.height });
    await page.goto("/contact");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Contact Sharma Academy, Dilsukhnagar");

    // address, phone, WhatsApp, timings: all [PENDING], nothing invented, no real tel:/wa.me links
    const details = page.locator("[data-contact-details]");
    await expect(details.locator("dt")).toHaveText(["Address", "Phone", "WhatsApp", "Timings"]);
    await expect(details.locator("dd")).toHaveText(["[PENDING]", "[PENDING]", "[PENDING]", "[PENDING]"]);
    expect(await details.innerText()).not.toMatch(/\d/);
    await expect(page.locator('a[href^="tel:"], a[href*="wa.me"]')).toHaveCount(0);

    // map placeholder (no real map embed)
    await expect(page.locator("[data-map-box]")).toContainText("Google Map");
    await expect(page.locator("[data-map-box]")).toContainText("[PENDING]");
    await expect(page.locator("iframe")).toHaveCount(0);

    // enquiry form: 3 fields, submit switched off, Day 8 note next to it
    await expect(page.getByLabel("Student's name")).toBeVisible();
    await expect(page.getByLabel("Parent's phone")).toBeVisible();
    await expect(page.getByLabel("Class")).toBeVisible();
    await expect(page.getByRole("button", { name: "Send enquiry" })).toBeDisabled();
    await expect(page.locator("[data-form-note]")).toContainText("Day 8");
    await expect(page.locator("[data-form-note]")).toContainText("database");
    // form must not post anywhere yet
    expect(await page.locator("form").getAttribute("action")).toBeNull();

    // content rules
    const text = (await page.locator("main").innerText()).toLowerCase();
    expect(text).not.toMatch(/₹|rs\.|\bfees?\b|seats|demo/);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(overflow).toBe(false);

    await page.screenshot({ path: `test-results/contact-${s.name}-full.png`, fullPage: true });
  });
}
