describe('Pahamify Cypress', () => {
    it('Test slide dashboard', () => {
      //open page
      cy.visit('https://pahamify.com/')
      
      //close popup
      cy.get('.mfp-close').click()
      cy.wait(2000)

      //slide
      cy.get('.elementor-element-634cd84 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link > .elementor-button-content-wrapper > .elementor-button-text').click()
      cy.wait(2000)
    })
})