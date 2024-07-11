import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  sortingName(): Locator {
    return this.page.locator('.product_sort_container');
  }

  async getFeaturesItems(): Promise<Locator> {
    return this.page.locator('.features_items');
  }

  async selectSortingOption(option: string): Promise<void> {
    await this.sortingName().selectOption(option);
  }

  async getInventoryItemNames(): Promise<string[]> {
    const items = await this.page.$$eval('.inventory_item_name', elements =>
      elements.map(el => el.textContent?.trim() || '')
    );
    return items;
  }
}
