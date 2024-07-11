import { Page, Locator } from '@playwright/test';

class PageBase {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async click(element: Locator) {
    await element.click();
  }
}

class LoginPage extends PageBase {
  userName() {
    return this.page.locator('#user-name');
  }

  password() {
    return this.page.locator('#password');
  }

  loginBtn() {
    return this.page.locator('#login-button');
  }

  async clickLoginBtn() {
    await this.click(this.loginBtn());
  }
}

export { LoginPage };
