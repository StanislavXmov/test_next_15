import { test, expect } from "@playwright/test";

test("should navigate to the server-components page", async ({ page }) => {
  await page.goto("/");
  await page.click("text=ServerComponents");
  await expect(page).toHaveURL("/server-components");
  await expect(page.locator("h1")).toBeVisible();
});
