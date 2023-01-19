describe('Edit Customer Success', () => {
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
    cy.get('#searching').type('Septiana')
    cy.contains('input.btn.btn-secondary.my-2.my-sm-0','Search').click()

    cy.get('h1').should('be.visible')

    // edit customer
    cy.contains('a.btn.btn-outline-primary','Edit').click()
    // name
    cy.get('<input class="form-control text-box single-line valid" id="Name" name="Name" type="text" value="Septiana" aria-invalid="false">').type(' ')
    // company
    cy.get('#Company').type('Institut Teknologi Nopember')
    // address
    cy.get('#Address').type('')
    // city
    cy.get('#City').type('')
    // phone
    cy.get('#Phone').type('')
    // email
    cy.get('#Email').type('')
    // button submit
    cy.get('.btn.btn-primary').click()

    cy.get('h1').should('be.visible')

  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})