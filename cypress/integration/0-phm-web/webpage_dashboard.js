describe('Pahamify Cypress', () => {
    it('Visir Web-page Pahamify', () => {
      //open page
      cy.visit('https://pahamify.com/')
      
      //close popup
      cy.get('.mfp-close').click()

      //slide
      cy.get('#slick-slide01 > button').click()
      cy.get('#slick-slide02 > button').click()
      cy.get('#slick-slide03 > button').click()
    })
  })