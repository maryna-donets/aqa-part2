/// <reference types="cypress" />

import Base from "./Base";

class Login extends Base {
	get userNameField() {
		return cy.get('[id="user-name"]');
	}
	get passwordField() {
		return cy.get('[id="password"]');
	}

	get loginButton() {
		return cy.get('[id="login-button"]');
	}

	get error() {
		return cy.get('[data-test="error"]');
	}

	open() {
		super.open("/");
	}

	login(username, password) {
		this.userNameField.type(username);
		this.passwordField.type(password);
		this.loginButton.click();
	}

	checkErrorMessage(text) {
		this.error.should("contain.text", text);
	}
}

export default new Login();
