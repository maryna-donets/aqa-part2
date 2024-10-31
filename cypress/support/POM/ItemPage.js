/// <reference types="cypress" />

import Base from "./Base";

class ItemPage extends Base {
	get image() {
		return cy.get(".inventory_details_img");
	}
	verifyImage() {
		this.image.should("exist");
        this.image.should("have.attr", "src")
          }
	
	get description() {
		return cy.get('[data-test="inventory-item-desc"]');
	}
	verifyDesc() {
		this.description.should("exist");
		this.description.invoke("text").should("have.length.gt", 0);
	}
	get price() {
		return cy.get('[data-test="inventory-item-price"]');
	}
	verifyPrice() {
		this.price.should("exist");
		this.price.should("not.have.text","");
        this.price.should("contain","$");
	}
	get name() {
		return cy.get('[data-test="inventory-item-name"]');
	}
	verifyName() {
		this.name.should("exist");
		this.name.invoke("text").should("have.length.gt", 0);
	}
	get addToCart() {
		return cy.get('[id="add-to-cart"]');
	}
	verifyAddtoCart() {
		this.addToCart.click();
		cy.get('[id="remove"]').should("exist");
	}
	get remove() {
		return cy.get('[id="remove"]');
	}
	verifyRemove() {
		this.remove.click();
		cy.get('[id="add-to-cart"]').should("exist");
	}
	open() {
		super.open("/inventory-item.html?id=4");
	}
}

export default new ItemPage();
