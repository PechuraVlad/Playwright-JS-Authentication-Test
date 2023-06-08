const Helper = {
      clickWithXPath: async (page, xpath) => {
        console.log(`Clicking on element with XPath: ${xpath}`);
        const element = await page.waitForSelector(xpath);
        await element.click();
        console.log(`Element with XPath ${xpath} clicked successfully`);
      },
    
      fillFieldWithXPath: async (page, xpath, text) => {
        console.log(`Filling field with XPath: ${xpath} with value: ${text}`);
        const element = await page.waitForSelector(xpath);
        await element.fill(text);
        console.log(`Field with XPath ${xpath} filled successfully with value: ${text}`);
      },

      getCurrentURL: async (page) => {
        const currentURL = await page.url();
        console.log(`Current URL: ${currentURL}`);
        return currentURL;
      },

      async isElementVisible(page, xpath) {
        console.log(`Searching for element "${xpath}"`);
        const element = await page.$(xpath);
        const isVisible = await element.isVisible();
        console.log(`Element "${xpath}" is ${isVisible ? 'visible' : 'not visible'}`);
        return isVisible;
      }
  };
  
  module.exports = Helper;