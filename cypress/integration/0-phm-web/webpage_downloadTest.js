describe('Pahamify Cypress', () => {
    it('Download file', () => {
      //open page
      cy.visit('https://pahamify.com/')
      
      //close popup
      cy.get('.mfp-close').click()
      cy.wait(2000)

      //download
      cy.get('#border-text > .elementor-widget-container > .elementor-heading-title > a').click()
      cy.get('.elementor-element-a6333d5 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-large').click()
    })
})