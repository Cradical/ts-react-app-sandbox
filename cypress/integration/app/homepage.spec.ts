/// <reference types="Cypress" />

const homepageTest = describe('homepage', () => {
  it('loads the homepage', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Text Box')
  })
})

export default homepageTest
