describe('Login', () => {
  it('successfullyy logs in', () => {
    cy.guiLogin()

    cy.contains('Swag Labs').should('be.visible')
    cy.get('.title').should('have.text', 'Products')
  })

  it('fails to log in with invalid credentials', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('invalid_user')
    cy.get('#password').type('invalid_password')
    cy.get('#login-button').click()

    cy.get('.error-message-container').should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('should not allow login for locked out user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.error-message-container').should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
  })
})