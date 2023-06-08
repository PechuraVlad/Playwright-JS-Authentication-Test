const Helper = require('../helpers/helper');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(`${process.env.BASE_URL}/login`);
  }

  async enterEmail(email) {
    await Helper.fillFieldWithXPath(this.page, "//input[@name='email']", email);
  }

  async enterPassword(password) {
    await Helper.fillFieldWithXPath(this.page, "//input[@name='password']", password);
  }

  async clickLoginButton() {
    await Helper.clickWithXPath(this.page, "//button[@data-v-f179b26e]");
  }

  async checkInvalidAlert() {
    const isVisible = await Helper.isElementVisible(this.page, "//div[@role='alert']");
    return isVisible;
  }

}

module.exports = LoginPage;