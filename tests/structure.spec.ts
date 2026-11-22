import { test, expect } from "@playwright/test";

const pages = [
  { path: "/", h1: "EAMCET rank under 2,000 – from our classrooms" },
  { path: "/batches", h1: "Batches" },
  { path: "/results", h1: "Results" },
  { path: "/contact", h1: "Contact" },
];

for (const p of pages) {
  test(`${p.path} has heading, header and footer`, async ({ page }) => {
    const res = await page.goto(p.path);
    expect(res?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1, name: p.h1 })).toBeVisible();
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
    await expect(page.locator("footer")).toContainText("[PENDING]");
  });
}

test("desktop nav links go to the right pages", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  for (const p of pages.slice(1)) {
    await page.getByRole("navigation", { name: "Main", exact: true }).getByRole("link", { name: p.h1 }).click();
    await expect(page).toHaveURL(new RegExp(`${p.path}/?$`)); // trailingSlash adds a final /
  }
});

test("mobile: no horizontal scroll on any page", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const p of pages) {
    await page.goto(p.path);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(overflow, p.path).toBe(false);
  }
});
