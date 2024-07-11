import { defineConfig, devices } from '@playwright/test';
// import { testPlanFilter } from "allure-playwright/dist/testplan";

/\*\*

- Read environment variables from file.
- https://github.com/motdotla/dotenv
  \*/
  // require('dotenv').config();

/\*\*

- See https://playwright.dev/docs/test-configuration.
  _/
  export default defineConfig({
  testDir: './tests',
  /_ Run tests in files in parallel _/
  fullyParallel: true,
  /_ Fail the build on CI if you accidentally left test.only in the source code. _/
  forbidOnly: !!process.env.CI,
  /_ Retry on CI only _/
  retries: process.env.CI ? 2 : 0,
  /_ Opt out of parallel tests on CI. _/
  workers: process.env.CI ? 1 : undefined,
  /_ Reporter to use. See https://playwright.dev/docs/test-reporters \*/

// grep: testPlanFilter(),
reporter: process.env.CI ? 'dot' : 'list',
/_ Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. _/
use: {
/_ Base URL to use in actions like `await page.goto('/')`. _/
// baseURL: 'https://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

},

/_ Configure projects for major browsers _/
projects: [
{
name: 'chromium',
use: { ...devices['Desktop Chrome'] },
},

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },

],

/_ Run your local dev server before starting the tests _/
// webServer: {
// command: 'npm run start',
// url: 'http://127.0.0.1:3000',
// reuseExistingServer: !process.env.CI,
// },
});
