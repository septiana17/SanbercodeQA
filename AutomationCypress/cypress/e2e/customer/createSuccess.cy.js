describe('Create Customer Success', () => {
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
    cy.get('#Name').type('Septiana')
    // company
    cy.get('#Company').type('ITS')
    // address
    cy.get('#Address').type('Sukolilo')
    // city
    cy.get('#City').type('Surabaya')
    // phone
    cy.get('#Phone').type('+628')
    // email
    cy.get('#Email').type('septianas@gmail.com')
    // button submit
    cy.get('.btn.btn-primary').click()

    cy.get('h1').should('be.visible')

  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})