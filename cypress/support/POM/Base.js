/// <reference types="cypress" />

export default class Base {
	constructor() {
		this.baseURL = Cypress.env("BASE_URL");
	}

	open(url = '') {
        cy.visit(url || this.baseURL);
    }
}
