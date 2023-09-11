import 'cypress';

describe('User Login', () => {
    it('should successfully log in', () => {
        const email = 'admin@example.com';
        const password = '1234';

        cy.visit('/login');

        cy.get('input[placeholder="email"]').type(email);
        cy.get('input[placeholder="password"]').type(password);

        cy.contains('Sign in').click();
    });

    it('should display error message', () => {
        const email = 'wrong@wrong.com';
        const password = 'wronglol';

        cy.visit('/login');

        cy.get('input[placeholder="email"]').type(email);
        cy.get('input[placeholder="password"]').type(password);

        cy.contains('Sign in').click();

        cy.contains('invalid login');
    })
})