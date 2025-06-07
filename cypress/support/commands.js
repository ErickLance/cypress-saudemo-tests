Cypress.Commands.add('guiLogin', (
  username = Cypress.env('USER_NAME'),
  password = Cypress.env('USER_PASSWORD')
) => {
  // Arrange
  cy.visit('https://www.saucedemo.com/')
  // Act
  cy.get('#user-name').type(username)
  cy.get('#password').type(password)
  cy.get('#login-button').click()
  // Assert
  cy.url().should('include', '/inventory.html')
})

Cypress.Commands.add('sessionLogin', (
  username = Cypress.env('USER_NAME'),
  password = Cypress.env('USER_PASSWORD')
) => {
  const login =() => cy.guiLogin(username, password)
  cy.session(username, login)
})