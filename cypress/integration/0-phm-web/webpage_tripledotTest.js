describe('Pahamify Cypress', () => {
    it('Test slide dashboard', () => {
      //open page
      cy.visit('https://pahamify.com/')
      
      //close popup
      cy.get('.mfp-close').click()
      cy.wait(2000)

      //slide
      cy.get('#slick-slide31 > button').click()
      cy.wait(2000)
      cy.get('#slick-slide32 > button').click()
      cy.wait(2000)
      cy.get('#slick-slide30 > button').click()
    })
  })