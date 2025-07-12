import { test, expect } from "@playwright/test";

test.describe("TabsComponent", () => {
  test("renders the component with default tab", async ({ page }) => {
    await page.goto("/tests");

    // Check if the component is rendered
    await expect(page.getByRole("tablist")).toBeVisible();

    // Check if both tabs are present using more specific selectors
    await expect(page.getByRole("tab", { name: "Account" })).toBeVisible();
    await expect(page.getByRole("tab", { name: "Password" })).toBeVisible();

    // Check if default content is shown
    await expect(
      page.getByText("Make changes to your account here.")
    ).toBeVisible();
  });

  test("switches between tabs correctly", async ({ page }) => {
    await page.goto("/tests");

    // Click on the Password tab
    await page.getByText("Password").click();

    // Check if password content is shown
    await expect(page.getByText("Change your password here.")).toBeVisible();

    // Click back on the Account tab
    await page.getByText("Account").click();

    // Check if account content is shown again
    await expect(
      page.getByText("Make changes to your account here.")
    ).toBeVisible();
  });

  test("has correct tab states", async ({ page }) => {
    await page.goto("/tests");

    // Check if Account tab is selected by default
    const accountTab = page.getByRole("tab", { name: "Account" });
    await expect(accountTab).toHaveAttribute("data-state", "active");

    // Check if Password tab is not selected by default
    const passwordTab = page.getByText("Password");
    await expect(passwordTab).toHaveAttribute("data-state", "inactive");
  });
});
