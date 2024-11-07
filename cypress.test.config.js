const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		chromeWebSecurity: false,
		baseUrl: "https://www.saucedemo.com/",
		env: {
			BASE_URL: "https://www.saucedemo.com/",
			USER_NAME: "problem_user",
			USER_PASSWORD: "secret_sauce",
		},
	},
});
