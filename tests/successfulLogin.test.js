const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const Helper = require('../helpers/helper');
const testData = require('../data/testdata.json');

test('Successful Login with Valid Credentials', async ({ page }) => {
  const email = testData.loginData.email;
  const password = testData.loginData.password;

  const loginPage = new LoginPage(page);
  await loginPage.open();

  await loginPage.enterEmail(email);
  await loginPage.enterPassword(password);
  await loginPage.clickLoginButton();

  expect(await Helper.getCurrentURL(page)).toBe('https://dev.omni-dispatch.com/chats');
});