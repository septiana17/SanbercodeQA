describe('Deelete Customer Success', () => {
  it('passes', () => {
    // visit the Itera web login
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.contains('a.nav-link','Login').click()
    cy.location('pathname').should('eq','/Login')
    // username
    cy.get('#Username').type('septiana17')
    // password
    cy.get('#Password').type('anissa1709')
    // button login
    cy.get('.btn-primary').click()

    cy.get('h1').should('be.visible')

    // search
    cy.get('#searching').type('Lilyan')
    cy.contains('input.btn.btn-secondary.my-2.my-sm-0','Search').click()

    cy.get('h1').should('be.visible')

    // edit customer
    cy.contains('a.btn.btn-outline-danger','Delete').click()
    // navlink
    cy.contains('input.btn.btn-outline-danger','Delete').click()

    cy.get('h1').should('be.visible')

  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})