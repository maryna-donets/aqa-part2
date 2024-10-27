const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		chromeWebSecurity: false,
		viewportWidth: 1280,
		viewportHeight: 800,
		defaultCommandTimeout: 10000,
	},
});
