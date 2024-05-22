const { PageObject } = require("../../pageObjects/PageObject");


Cypress.on("uncaught:exception", (err, runnable) => {
    // Devuelve `false` para ignorar excepciones no controladas
    return false;
  });
  

let pageObj = new PageObject();

describe("Planes alimenticios - Acceso", () => {
  it("Debería permitir iniciar sesión y acceder a planes alimenticios", () => {
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
     // Hacer clic en el plan alimenticio
     
     cy.get(`:nth-child(2) > [data-testid="service-card-wrapper"] > .icon-content > .btn > span`).click();
 
     // Verificar que la URL cambie a la página de detalles esperada
     cy.url().should("include", "/services/serviceType/01b50f0d-3226-4df2-b912-4da4b37d9bd9");
     cy.wait(5000)
     cy.visit('http://localhost:3000/services/serviceType/01b50f0d-3226-4df2-b912-4da4b37d9bd9');
     cy.wait(3000)
     
   
   });
 });