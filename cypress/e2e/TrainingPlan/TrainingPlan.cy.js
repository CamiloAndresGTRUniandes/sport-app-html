const { PageObject } = require("../../pageObjects/PageObject");


Cypress.on("uncaught:exception", (err, runnable) => {
    // Devuelve `false` para ignorar excepciones no controladas
    return false;
  });
  

let pageObj = new PageObject();

describe("Planes de entrenamiento - Acceso", () => {
  it("Debería permitir iniciar sesión y acceder a planes de entrenamiento", () => {
    cy.visit("http://localhost:3000/Login");
    cy.wait(2000);

    // Llenar campos de inicio de sesión
    cy.get("#email").type("nathanbelt23@gmail.com");
    cy.wait(1000);
    cy.get("#password").type("Hope2028*");
    cy.wait(1000);

     // Hacer clic para iniciar sesión
     cy.contains("Iniciar sesion").click();
     cy.wait(6000);
 
     // Acceder al menú de servicios
     cy.get("#navbarNavDropdown > ul > li:nth-child(4) > a").trigger("mouseover");

          // Acceder al menú de servicios
          cy.get("#navbarNavDropdown > ul > li:nth-child(4) > a").trigger("mouseover");
 
          // Verificar que el menú contiene el enlace de recomendaciones
          cy.get("#navbarNavDropdown > ul > li:nth-child(4) > ul").within(() => {
            cy.contains("Servicios").should("have.attr", "href", "/services");
          });
      
          // Hacer clic en el enlace de recomendaciones
          cy.get("#navbarNavDropdown > ul > li:nth-child(4) > ul > li:nth-child(1) > a").click({ force: true });
          cy.wait(3000);
 
     // Verificar que el menú contiene el enlace de recomendaciones
     cy.get("#navbarNavDropdown > ul > li:nth-child(4) > ul").within(() => {
       cy.contains("Servicios").should("have.attr", "href", "/services");
     });
 
     // Hacer clic en el enlace de servicios
     cy.visit('http://localhost:3000/services');
     cy.wait(5000)
     // Hacer clic en el plan de entrenamiento
     
     cy.get(`:nth-child(3) > [data-testid="service-card-wrapper"] > .icon-content > .btn`).click();
 
     // Verificar que la URL cambie a la página de detalles esperada
     cy.url().should("include", "/services/serviceType/3040214a-a77d-4549-8f67-6b51f7755a3e");
     cy.wait(5000)
     cy.visit('http://localhost:3000/services/serviceType/3040214a-a77d-4549-8f67-6b51f7755a3e');
     cy.wait(5000)
     // Ver detalle de entrenamientos
     cy.get(`:nth-child(1) > .highlighted-cell`).click();
     // Verificar que la URL cambie a la página de detalles esperada
     cy.url().should("include", "/DetailTrainingTable/9db604ac-f30a-4e41-9662-2c64c19d31b4");
     cy.wait(3000)
     cy.visit('http://localhost:3000/services/serviceType/3040214a-a77d-4549-8f67-6b51f7755a3e');
     cy.wait(5000)
     // Suscribirse en un entrenamiento
     cy.get(`:nth-child(1) > :nth-child(6) > .btn`).click();
     cy.wait(3000)


     
   
   });
 });