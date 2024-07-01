describe('TodoMVC', function() {

  it('Dynamic Content Layout Testing', function() {
    cy.visit("https://the-internet.herokuapp.com/dynamic_content");
    cy.percySnapshot("dynamic - layout", {enableLayout: true});
  })

  it('Dynamic Content Strict Testing', function() {
    cy.visit("https://the-internet.herokuapp.com/dynamic_content");
    cy.percySnapshot("dynamic - strict");
  })
})
