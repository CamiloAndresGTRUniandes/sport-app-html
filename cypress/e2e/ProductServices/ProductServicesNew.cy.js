const { faker } = require("@faker-js/faker");



describe('Crear Producto o Servicio', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/product-services');
    cy.wait(10000);
  });

  it('debería permitir completar y enviar el formulario', () => {
    cy.get('.col-lg-2 > .btn > span').click();
    cy.wait(10000);

    // Completar el formulario con datos generados por Faker
    cy.get('#name').type(faker.name.firstName()); // Aquí se corrigió la llamada a faker
    cy.wait(2000);

    cy.get('#description').type(faker.lorem.word());
    cy.wait(2000);

    cy.get('#categoryId').select('Productos');
    cy.wait(3000);

    cy.get('#serviceTypeId').select('Alimento');
    cy.wait(2000);

    cy.get('#price').type(faker.datatype.number({ min: 1, max: 2000000000 }));
    cy.wait(2000);

    cy.get('#planId').select('Intermediate');
    cy.wait(2000);

    cy.get('#picture').type(faker.internet.url());
    cy.wait(2000);

    cy.get('#uncontrolled-tab-example-tab-0').click();
    cy.wait(3000);

    cy.get('#countryId').select('Colombia');
    cy.wait(3000);

    cy.get('#stateId').select('Antioquia');
    cy.wait(4000);

    cy.get('#cityId').select('Medellin');
    cy.wait(4000);

    cy.get('#uncontrolled-tab-example-tab-1').click();
    cy.wait(2000);

    cy.get(':nth-child(1) > div > .m-2 > .form-check-input').click();
    cy.wait(1000);

    cy.get('#typeOfNutritionId').select('NutritionType');
    cy.wait(2000);

    cy.get('#uncontrolled-tab-example-tab-2').click();
    cy.wait(1000);

    cy.get('#sportLevel').select('Básico');
    cy.wait(2000);

    cy.get(':nth-child(2) > div > .m-2 > .form-check-input').click();
    cy.wait(3000);

    cy.get(':nth-child(3) > div > :nth-child(1) > .form-check-input').click();
    cy.wait(2000);

    cy.get(':nth-child(2) > .form-check-input').click();
    cy.wait(2000);

    cy.get("#root > div.page-wraper > div > div.container > div > div > form > div > div.col-md-6.col-lg-6.col-sm-12.mr-3.animate__animated.animate__backInLeft > div.row.d-flex.justify-content-around.mb-4 > button").click()

    
    cy.wait(5000);
  });
});
