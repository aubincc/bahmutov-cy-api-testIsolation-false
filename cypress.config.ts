const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    watchForFileChanges: true,
    // https://github.com/bahmutov/cy-api/issues/210#issuecomment-1597288221
    // uncomment one at a time
    testIsolation: false,
    // testIsolation: true,
    env: {},
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
