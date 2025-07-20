const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.spec.js',
    env: {
      API_BASE_URL: process.env.API_BASE_URL,
      ACCESS_TOKEN: process.env.ACCESS_TOKEN,
      API_KEY: process.env.API_KEY
    },
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--user-agent=CpAutomationTest');
        }
        return launchOptions;
      });
    },
  },
});