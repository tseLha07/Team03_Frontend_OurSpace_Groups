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

    it('should successfully navigate', () => {
        cy.wait(2000);
        cy.visit('http://localhost:3000/4173b16c-6124-49c0-a29f-254dca05e5fe/userDetails');
    });

    it('should successfully change membership', () => {
        const firstName = 'Daniel';
        const lastName = 'Craig';
        const email = 'craigdaniel@mail.com';
        
        cy.wait(2000);
        cy.contains('Add').click();

        cy.get('input[placeholder="Firstname"]').type(firstName);
        cy.get('input[placeholder="Lastname"]').type(lastName);
        cy.get('input[placeholder="E-mail"]').type(email);

        cy.contains('Add').click();
    });

    it('should successfully redirect', () => {
        cy.wait(2000);
        cy.url().should('include', 'http://localhost:3000');
    });
});

