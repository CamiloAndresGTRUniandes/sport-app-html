

describe('Seleccionar servicio', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/services');
        cy.wait(5000)
        // Espera a que un elemento específico esté presente antes de continuar
        cy.get(':nth-child(2) > .icon-bx-wraper > .icon-content > .btn > span').click();
    });

    it('debería llevar a la página de detalles del servicio', () => {

        // Espera a que la URL cambie a la página de detalles del servicio y verifica que incluya la parte esperada
        cy.url().should('include', '/services/serviceType/01b50f0d-3226-4df2-b912-4da4b37d9bd9');
    });
});

