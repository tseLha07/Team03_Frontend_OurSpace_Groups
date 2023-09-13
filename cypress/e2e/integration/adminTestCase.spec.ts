import 'cypress';

describe('Admin logs in', () => {
    it('should successfully log in', () => {
        const email = 'admin@example.com';
        const password = '1234';

        cy.visit('http://localhost:3000/login');

        cy.get('input[placeholder="email"]').type(email);
        cy.get('input[placeholder="password"]').type(password);

        cy.contains('Sign in').click();

        cy.url().should('include', 'http://localhost:3000');
    });

});

describe('Admin navigates to users details of a group', () => {

});

describe('Admin changes user membership', () => {

});

describe('Redirects admin to homepage', () => {

})