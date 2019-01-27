describe('Go to localhost', function() {
    it('goes to home page', function() {
        cy.visit('http://localhost:4200/')
        cy.get('h1')
    })
})