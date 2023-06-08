module.exports = {
    browsers: ['chromium'],
    timeout: 30000,
    retries: 2,
    reporter: 'list',
    outputDir: './test-results',
    workers: 1,
    use: {
      baseURL: 'https://dev.omni-dispatch.com',
      screenshot: 'off',
      video: false,
      trace: false,
      launchOptions: {
        headless: false,
      },
      afterEach: async ({ page }) => {
        await page.waitForTimeout(2000);
      },
    },
  };