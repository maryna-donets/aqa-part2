const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		chromeWebSecurity: false,
		viewportWidth: 1280,
		viewportHeight: 800,
		defaultCommandTimeout: 5000,
		setupNodeEvents(on, config) {
			config.env.BASE_URL = process.env.BASE_URL || config.env.BASE_URL || "https://www.saucedemo.com/";
			return config;
		  },
		  env: {
			BASE_URL: "https://www.saucedemo.com/",
			USER_NAME: "standard_user",
			USER_PASSWORD: "secret_sauce"
		  }
	},
});
