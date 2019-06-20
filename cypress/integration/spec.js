it('loads page', () => {
  cy.visit('index.html')
  cy.contains('sample page').should('be.visible')
})
