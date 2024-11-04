/// <reference types="cypress" />
import Login from "../../support/POM/Login";
//import creds from "../../fixtures/creds.json";

describe("Login", () => {
	beforeEach(() => {
		Login.open();
	});
	it("wrong password", () => {
		Login.login(Cypress.env("USER_NAME"), Cypress.env("USER_PASSWORD"));
		Login.checkErrorMessage(
			"Epic sadface: Username and password do not match any user in this service"
		);
	});
	it("wrong username", () => {
		Login.login(Cypress.env("USER_NAME"), Cypress.env("USER_PASSWORD"));
		Login.checkErrorMessage(
			"Epic sadface: Username and password do not match any user in this service"
		);
	});
	it("successfull login", () => {
		Login.login(Cypress.env("USER_NAME"), Cypress.env("USER_PASSWORD"));
		cy.url().should("include", "inventory.html");
		cy.get('[id="shopping_cart_container"]').should(
			"have.class",
			"shopping_cart_container"
		);
	});
});
