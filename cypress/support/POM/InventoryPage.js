/// <reference types="cypress" />

import Base from "./Base";

class InventoryPage extends Base {
	get cart() {
		return cy.get('[data-test="shopping-cart-link"]');
	}

	get sorting() {
		return cy.get('[data-test="product-sort-container"]');
	}
	get sortOptins() {
		return cy.get('[data-test="product-sort-container"] option');
	}
	get burger() {
		return cy.get('[class="bm-burger-button"]');
	}
	verifyBurger() {
		this.burger.should("exist");
	}
	verifyCart() {
		this.cart.should("exist");
	}
	verifySortOptins() {
		this.sortOptins.should("exist");
	}
	openItemByName(itemName) {
		cy.contains(".inventory_item_name", itemName).click();
		cy.url().should("include", "/inventory-item");
		cy.get(".inventory_details_name").should("contain", itemName);
	}
	select() {
		cy.get("select").select("Price (high to low)");
	}

	sortingOptins() {
		this.sortOptins.should("have.length", 4);
	}

	sortElem() {
		this.select();
		cy.get(".inventory_item_price").then(($prices) => {
			const prices = [...$prices].map((el) =>
				parseFloat(el.innerText.replace(/[^\d.]/g, ""))
			);
			const sortedPrices = [...prices].sort((a, b) => b - a);
			expect(prices).to.deep.equal(sortedPrices);
		});
	}

	openCart() {
		this.cart.click();
	}

	open() {
		super.open("/inventory.html");
	}
}

export default new InventoryPage();
