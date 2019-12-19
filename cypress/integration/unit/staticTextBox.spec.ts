/// <reference types="Cypress" />

import { StaticTextBox } from '../../../src/components/StaticTextBox'

const staticTextBoxTest = describe('StaticTextBox Component', () => {
  it('works', () => {
    cy.mount((StaticTextBox as unknown) as Symbol)
    // the 'as unknown as Symbol' ts declaration seems to work for clearing the
    // ts error but I don't know how acceptable it is in practice. Any help here
    // would be great.
  })
})

export default staticTextBoxTest
