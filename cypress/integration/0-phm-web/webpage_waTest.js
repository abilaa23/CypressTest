describe('Pahamify Cypress', () => {
    it('Get Whatsapp', () => {
      //open page
      cy.visit('https://pahamify.com/')
      
      //close popup
      cy.get('.mfp-close').click()
      cy.wait(2000)

      //subbab product menu
      cy.get('.btn-sticky__link > .litespeed-loaded').click()
      cy.wait(2000)
      //
    })
  })