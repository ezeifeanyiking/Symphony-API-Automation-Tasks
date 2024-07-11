import { test, expect, Page } from "@playwright/test";
import { LoginPage } from "../../PageObjects/LoginPage";
import { ProductsPage } from "../../PageObjects/ProductsPage";
import validLoginInfo, { LoginInfo } from "../../fixtures/validLoginInfo";

test.describe("Validate that items are sorted by Name (A to Z) and Name (Z to A)", () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);

    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("https://www.saucedemo.com/");

    const loginData: LoginInfo = validLoginInfo[0];

    await loginPage.userName().fill(loginData.username);
    await loginPage.password().fill(loginData.password);
    await loginPage.clickLoginBtn();
  });

  test("should validate that items are sorted by Name (A to Z) and Name (Z to A)", async ({
    page,
  }) => {
    const sortingOption = await productsPage.sortingName().textContent();

    if (sortingOption?.includes("Name (A to Z)")) {
      await verifySortingOrder(page, "asc");
    } else {
      await productsPage.selectSortingOption("Name (A to Z)");
      await verifySortingOrder(page, "asc");
    }

    await productsPage.selectSortingOption("Name (Z to A)");
    await verifySortingOrder(page, "desc");
  });

  async function verifySortingOrder(
    page: Page,
    order: "asc" | "desc"
  ): Promise<void> {
    const itemNames = await productsPage.getInventoryItemNames();

    const sortedNames =
      order === "asc"
        ? [...itemNames].sort()
        : [...itemNames].sort((a, b) => b.localeCompare(a));

    expect(itemNames).toEqual(sortedNames);
  }
});
