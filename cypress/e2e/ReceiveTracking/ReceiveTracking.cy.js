const { PageObject } = require("../../pageObjects/PageObject");


Cypress.on("uncaught:exception", (err, runnable) => {
    // Devuelve `false` para ignorar excepciones no controladas
    return false;
  });
  

let pageObj = new PageObject();

describe("Recibir seguimientos - Acceso", () => {
  it("Debería permitir iniciar sesión y acceder a seguimientos", () => {
    cy.visit("http://localhost:3000/Login");
    cy.wait(2000);

    // Llenar campos de inicio de sesión
    cy.get("#email").type("Harold@gmail.com");
    cy.wait(1000);
    cy.get("#password").type("Hope2028*");
    cy.wait(1000);

     // Hacer clic para iniciar sesión
     cy.contains("Iniciar sesion").click();
     cy.wait(6000);
 
     // Acceder al menú de seguimientos
     cy.get("#navbarNavDropdown > ul > li:nth-child(5) > a").trigger("mouseover");
 
     // Verificar que el menú contiene el enlace de seguimientos
     cy.get("#navbarNavDropdown > ul > li:nth-child(5) > ul").within(() => {
       cy.contains("Seguimientos").should("have.attr", "href", "/seguimientos");
     });
 
     // Hacer clic en el enlace de seguimientos
     cy.get("#navbarNavDropdown > ul > li:nth-child(5) > ul > li:nth-child(3) > a").click({ force: true });
     cy.wait(6000);
 
     // Hacer clic en una recomendación específica
     cy.get(":nth-child(1) > .dz-card > .dz-info > .dz-button > .btn > span").click();
 
     // Verificar que la URL cambie a la página de detalles esperada
     cy.url().should("include", "/Seguimiento-Detail/ff892cd6-c6f0-4640-b41d-08dc67f49a63");
   });
 });