/// <reference types="cypress" />
import Login from "../../support/POM/Login";
import creds from "../../fixtures/creds.json";

describe("Login", () => {
	beforeEach(() => {
		Login.open();
	});
	it("wrong password", () => {
		Login.login(creds.userNames.validName, creds.passwords.invalidPassword);
		Login.checkErrorMessage(
			"Epic sadface: Username and password do not match any user in this service"
		);
	});
	it("wrong username", () => {
		Login.login(creds.userNames.invalidName, creds.passwords.validPassword);
		Login.checkErrorMessage(
			"Epic sadface: Username and password do not match any user in this service"
		);
	});
	it("successfull login", () => {
		Login.login(creds.userNames.validName, creds.passwords.validPassword);
		cy.url().should("include", "inventory.html");
		cy.get('[id="shopping_cart_container"]').should(
			"have.class",
			"shopping_cart_container"
		);
	});
});
