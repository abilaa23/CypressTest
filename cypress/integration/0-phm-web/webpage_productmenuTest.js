describe('Pahamify Cypress', () => {
    it('Test Product menu dashboard', () => {
      //open page
      cy.visit('https://pahamify.com/')
      
      //close popup
      cy.get('.mfp-close').click()
      cy.wait(2000)

      //subbab product menu
      cy.get('.nav-dropdown-content > :nth-child(1) > .dropbtn > .nav-title').click()
      cy.wait(2000)
      //
    })
  })