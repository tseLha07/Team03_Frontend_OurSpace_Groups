describe('User Login', () => {
    it('should successfully log in', () => {
        const email = 'admin@example.com';
        const password = '1234';

        cy.visit('http://localhost:3000/login');

        cy.get('input[placeholder="Enter username"]').type(email);
        cy.get('input[placeholder="Enter password"]').type(password);

        cy.contains('Sign in').click();

        cy.url().should('include', 'http://localhost:3000');
    });
});
