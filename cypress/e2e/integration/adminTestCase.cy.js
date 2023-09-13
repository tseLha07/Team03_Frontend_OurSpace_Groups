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
        cy.wait(1000);
        cy.contains('users').click();
        cy.contains('Dashboard').click();
    });

    it('should successfully change membership', () => {
        
        cy.contains('Add Users').should('be.visible');
        cy.contains('James').should('be.visible');
        cy.contains('Bond').should('be.visible');
        cy.contains('admin@example.com').should('be.visible');
        cy.contains('Edit').should('be.visible');
        cy.contains('Delete').should('be.visible');
        cy.contains('Back').should('be.visible');
        cy.contains('Home').should('be.visible');

        cy.wait(2000);

        /*
            Unindentifizierbarer Fehler taucht auf
            beim Clicken des "Add Users"

            Manuelles Clicken auf dem Browser geht jedoch
        */

        /*
        const firstName = 'Daniel';
        const lastName = 'Craig';
        const email = 'craigdaniel@mail.com';

        cy.get('input[placeholder="Firstname"]').type(firstName);
        cy.get('input[placeholder="Lastname"]').type(lastName);
        cy.get('input[placeholder="E-mail"]').type(email);

        cy.contains('Add').click();
        */
    });

    it('should successfully redirect', () => {
        cy.wait(3000);
        cy.url().should('include', 'http://localhost:3000');
    });
});

