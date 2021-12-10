describe('Pahamify Cypress', () => {
    it('Test slide dashboard', () => {
      //open page
      cy.visit('https://pahamify.com/')
      
      //close popup
      cy.get('.mfp-close').click()
      cy.wait(2000)

      //slide
      cy.get('#slick-slide01 > button').click()
      cy.wait(2000)
      cy.get('#slick-slide02 > button').click()
      cy.wait(2000)
      cy.get('#slick-slide03 > button').click()
    })
  })