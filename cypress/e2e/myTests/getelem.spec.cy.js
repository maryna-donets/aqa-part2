/// <reference types="cypress"/>

describe("find buttons in header and footer", () => {
	beforeEach(async () => {
		cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
	});

	it("finds buttons in header", () => {
		cy.get(".header_logo");
		cy.get('[class="btn header-link -active"]');
		cy.contains(".btn.header-link", "About");
		cy.get(".header_nav").find(".header-link").last();
		cy.get(".header-link").last();
		cy.get(".header_signin");
	});

	it("finds buttons and links in footer", () => {
		cy.get(".socials_link").siblings();
		cy.get(".contacts_link").eq(0);
		cy.get(".contacts_link").contains("support@ithillel.ua");
	});
});
