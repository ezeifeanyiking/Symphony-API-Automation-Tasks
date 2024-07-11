import { Locator } from '@playwright/test';

class PageBase {
  async click(element: Locator): Promise<void> {
    await element.click();
  }
}

export { PageBase };
