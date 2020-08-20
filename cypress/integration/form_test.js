const { cyan } = require("color-name")

describe('formApp', ()=>{
  describe('nameTest', ()=>{
    it('reactserver', ()=>{
      cy.visit ("http://localhost:3000/")
    })

    it('the submit button is disabled', () => {
      cy.get('button').should('be.disabled')
    })
    it('can type something in the "firstname" input', () => {
      cy.get('input[name="firstname"]')
        .type('Lisa')
        .should('have.value', 'Lisa')
    })

    it('can type something in the "lastname" input', () => {
      cy.get('input[name="lastname"]')
        .type('Leslie')
        .should('have.value', 'Leslie')
    })
    it('can type something in the "email" input', () => {
      cy.get('input[name="email"]')
        .type('Lisal@aol.com')
        .should('have.value', 'Lisal@aol.com')
    })
    it('submit button is enabled', () => {
      cy.get('button').should('be.enabled')
    })

    it('cancel button empties out both inputs and disables itself', () => {
      cy.get("button").click()
      cy.get("input[name='firstname']").should("have.value", "")
      cy.get("input[name='lastname']").should("have.value", "")
      cy.get("button").should("be.disabled")
    })

  })
})
  
      