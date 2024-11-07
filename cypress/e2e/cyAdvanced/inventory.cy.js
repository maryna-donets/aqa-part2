/// <reference types="cypress" />
import Login from "../../support/POM/Login";
import creds from "../../fixtures/creds.json";
import InventoryPage from "../../support/POM/InventoryPage";

describe("Inventory", () => {
	beforeEach(() => {
		Login.open();
		Login.login(Cypress.env("USER_NAME"), Cypress.env("USER_PASSWORD"));
	});

	it("should contain burger menu, cart, sorting", () => {
		InventoryPage.verifyBurger();
		InventoryPage.verifyCart();
		InventoryPage.verifySortOptins();
	});
	it("sorting has 4 option", () => {
		InventoryPage.sortingOptins();
	});
	it("should open cart", () => {
		InventoryPage.openCart();
		cy.url().should("include", "cart.html");
	});
	it("should open item page", () => {
		InventoryPage.openItemByName("Sauce Labs Backpack");
	});
	it("should sort page", () => {
		InventoryPage.sortElem();
	});
});
