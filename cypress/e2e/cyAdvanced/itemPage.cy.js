/// <reference types="cypress" />
import Login from "../../support/POM/Login";
import creds from "../../fixtures/creds.json";
import ItemPage from "../../support/POM/ItemPage";
import InventoryPage from "../../support/POM/InventoryPage";

describe("ItemPage", () => {
	beforeEach(() => {
		Login.open();
		//Login.login(creds.userNames.validName, creds.passwords.validPassword);
		Login.login(Cypress.env("USER_NAME"), Cypress.env("USER_PASSWORD"));
        InventoryPage.openItemByName('Sauce Labs Backpack')
	});
	it("should check item details", () => {
		ItemPage.verifyImage();
		ItemPage.verifyDesc();
		ItemPage.verifyPrice();
		ItemPage.verifyName();
	});
	it("should check Remove button", () => {
		ItemPage.verifyAddtoCart();
	});
	it("should check Add to Cart button", () => {
        ItemPage.verifyAddtoCart();
		ItemPage.verifyRemove();
	});
});
