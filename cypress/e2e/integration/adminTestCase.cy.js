describe('Admin logs in', () => {
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

describe('Admin navigates to users details of a group', () => {
    it('should successfully navigate', () => {
        cy.visit('http://localhost:3000/4173b16c-6124-49c0-a29f-254dca05e5fe/userDetails');
    });
});

describe('Admin changes user membership', () => {
    it('should successfully change membership', () => {
    });
});

describe('Redirects admin to homepage', () => {
    it('should successfully redirect', () => {
    });
});
