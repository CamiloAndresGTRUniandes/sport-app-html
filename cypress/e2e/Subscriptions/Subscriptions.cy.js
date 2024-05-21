const { PageObject } = require("../../pageObjects/PageObject");


Cypress.on("uncaught:exception", (err, runnable) => {
    // Devuelve `false` para ignorar excepciones no controladas
    return false;
  });
  

let pageObj = new PageObject();

describe("Suscripcion - Acceso", () => {
  it("Debería permitir iniciar sesión y acceder a las suscripciones", () => {
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
 
     // Acceder al menú de suscripcion
     cy.get("#navbarNavDropdown > ul > li:nth-child(2) > a").trigger("mouseover");
     document.querySelector("#navbarNavDropdown > ul > li.sub-menu-down.open.active.active > a")

          // Acceder al menú de precios
          cy.get(".open > :nth-child(1)").trigger("mouseover");
 
          // Verificar que el menú contiene el enlace de recomendaciones
          cy.get(".open > :nth-child(1)").within(() => {
            cy.contains("Otras").should("have.attr", "href", "/pricing");
          });
      
          // Hacer clic en el enlace de precios
          cy.get("#navbarNavDropdown > ul > li:nth-child(1) > ul > li:nth-child(3) > a").click({ force: true });
          cy.wait(3000);
 
     // Verificar que el menú contiene el enlace de recomendaciones
     cy.get("#navbarNavDropdown > ul > li:nth-child(3) > ul").within(() => {
       cy.contains("Otras").should("have.attr", "href", "/pricing");
     });
 


     
   
   });
 });