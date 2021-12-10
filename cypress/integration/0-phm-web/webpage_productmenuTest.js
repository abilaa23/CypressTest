describe('Pahamify Cypress', () => {
    it('Test Product menu dashboard', () => {
      //open page
      cy.visit('https://pahamify.com/')
      
      //close popup
      cy.get('.mfp-close').click()
      cy.wait(2000)

      //slide
      cy.get('.nav-dropdown-content > :nth-child(1) > :nth-child(5) > .nav-title')
        .click({force: true})
      cy.wait(2000)
      //cy.url().should('contain', 'https://tryout.pahamify.com/')
    })
  })