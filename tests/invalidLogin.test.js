const { test } = require('@playwright/test');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const Helper = require('../helpers/helper');
const testData = require('../data/invalidTestData.json');

for (const data of testData.loginData) {
  test(`Invalid Login with Incorrect Credentials: ${data.email}, Password: ${data.password}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();

    await loginPage.enterEmail(data.email);
    await loginPage.enterPassword(data.password);
    await loginPage.clickLoginButton();

    expect(await loginPage.checkInvalidAlert()).toBe(true);
  });
}