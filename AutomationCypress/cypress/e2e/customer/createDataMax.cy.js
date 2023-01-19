describe('Create Customer Data Maximum', () => {
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

    // create customer
    cy.contains('a.btn.btn-primary','Create New').click()
    // name
    cy.get('#Name').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    // company
    cy.get('#Company').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    // address
    cy.get('#Address').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    // city
    cy.get('#City').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    // phone
    cy.get('#Phone').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    // email
    cy.get('#Email').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    // button submit
    cy.get('.btn.btn-primary').click()

    cy.get('h2').should('be.visible')
    cy.get('body > div > div:nth-child(4) > form > table > tbody > tr:nth-child(5) > td > label').should('contain', 'Failed Data')

  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})