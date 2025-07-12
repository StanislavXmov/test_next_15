import { test, expect } from "@playwright/test";

test("should navigate to the server-components page", async ({ page }) => {
  await page.goto("http://localhost:3000/get-data");
  await page.getByTestId("get-data").click();

  // await page.screenshot({
  //   path: "get-data.png",
  // });
  await expect(page.getByTestId("server-get-data-0")).toHaveText(/test 43/);
  await expect(page.getByTestId("client-get-data-0")).toHaveText(/test 43/);
});
