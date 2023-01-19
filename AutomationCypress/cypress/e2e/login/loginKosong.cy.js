describe('Login Website Itera Positif', () => {
  it('passes', () => {
    // visit the Itera web login
    cy.visit('https://itera-qa.azurewebsites.net/')
    cy.contains('a.nav-link','Login').click()
    cy.location('pathname').should('eq','/Login')
    // username
    cy.get('#Username').type(' ')
    // password
    cy.get('#Password').type(' ')
    // button login
    cy.get('.btn-primary').click()

    cy.get('body > div > div:nth-child(4) > form > table > tbody > tr:nth-child(5) > td > label').should('contain', 'Wrong username or password')
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})