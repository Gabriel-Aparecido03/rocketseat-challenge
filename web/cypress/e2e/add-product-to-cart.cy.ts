describe('Add product to cart' , () => {
  it('shuld be to navigate to page and add it to the cart',()=>{
    cy.visit('http://localhost:3000')

    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include','/product')
    cy.contains('ADICIONAR AO CARRINHO').click()
  })
})