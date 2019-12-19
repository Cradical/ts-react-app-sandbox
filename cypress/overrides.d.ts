declare namespace Cypress {
  interface Chainable<Subject> {
    mount: (component: JSX.Element, alias?: string) => Chainable<void>
  }
}
