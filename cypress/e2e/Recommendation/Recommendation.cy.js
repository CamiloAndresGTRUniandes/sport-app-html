const { PageObject } = require("../../pageObjects/PageObject");


Cypress.on("uncaught:exception", (err, runnable) => {
    // Devuelve `false` para ignorar excepciones no controladas
    return false;
  });
  

let pageObj = new PageObject();

describe("Recomendaciones - Acceso", () => {
  it("Debería permitir iniciar sesión y acceder a recomendaciones", () => {
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
 
     // Acceder al menú de recomendaciones
     cy.get("#navbarNavDropdown > ul > li:nth-child(5) > a").trigger("mouseover");
 
     // Verificar que el menú contiene el enlace de recomendaciones
     cy.get("#navbarNavDropdown > ul > li:nth-child(5) > ul").within(() => {
       cy.contains("Tus recomendaciones").should("have.attr", "href", "/RecomendacionesPage");
     });
 
     // Hacer clic en el enlace de recomendaciones
     cy.get("#navbarNavDropdown > ul > li:nth-child(5) > ul > li:nth-child(1) > a").click({ force: true });
     cy.wait(3000);
 
     // Hacer clic en una recomendación específica
     cy.get(":nth-child(1) > .dz-card > .dz-info > .dz-button > .btn > span").click();
 
     // Verificar que la URL cambie a la página de detalles esperada
     cy.url().should("include", "/Recomendacion-Detail");
   });
 });