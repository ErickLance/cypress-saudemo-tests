describe('Scenarios where authentication is a pre-condition', () => {
  beforeEach(() => {
    cy.sessionLogin()
  })
  it('successfully log out', () => {
    cy.visit('/inventory.html')
    cy.get('#add-to-cart-sauce-labs-backpack').click()
  })
})