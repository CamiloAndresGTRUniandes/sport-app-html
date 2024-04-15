const { faker } = require("@faker-js/faker");
describe('Crear Producto o Servicio', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/product-services');
        cy.wait(35000);
    });

    it('debería mostrar el formulario de creación correctamente', () => {




        // Verificar que el formulario y todos sus campos estén presentes


                //editar un producto
        cy.get(':nth-child(1) > :nth-child(5) > .btn').click();
        cy.wait(15000);


        cy.get('form').should('exist');
      
        // Validar campos de texto
        cy.get('#name').should('exist');
        cy.get('#description').should('exist');
        cy.get('#picture').should('exist');
      
        // Validar campos de selección
        cy.get('#categoryId').should('exist');
        cy.get('#serviceTypeId').should('exist');
        cy.get('#planId').should('exist');
      
      
        // Validar campos específicos que pueden aparecer condicionalmente
        cy.get('#price').should('exist'); // Si no es un evento
        cy.get('#countryId').should('exist'); // Dependiendo de la selección de país y estado
        cy.get('#stateId').should('exist'); // Dependiendo de la selección de país y estado
        cy.get('#cityId').should('exist'); // Dependiendo de la selección de país y estado
        cy.get('#typeOfNutritionId').should('exist'); // Si es tipo de nutrición
    });
  
    it('debería permitir completar y enviar el formulario', () => {

                //editar un producto
        cy.get(':nth-child(1) > :nth-child(5) > .btn').click();
        cy.wait(10000);
        
        // Completar el formulario con datos válidos
        // Rellenar el campo de descripción
        cy.get('#name').clear();
        cy.wait(2000);  
        cy.get('#name').type(faker.name.firstName());
        cy.wait(2000);   
   
        // Rellenar el campo de descripción
        cy.get('#description').clear();
        cy.wait(2000);  
        cy.get('#description').type(faker.lorem.word());
        cy.wait(2000);      
        // Verificar que se haya escrito el texto correctamente

        // Ejemplo de seleccionar una opción de una lista desplegable
        cy.get('#categoryId').select('Productos');
        cy.wait(3000);
      
        cy.get('#serviceTypeId').select('Alimento');
        cy.wait(2000);
      
        cy.get('#price').clear();
        cy.wait(2000);    
        cy.get('#price').type(faker.datatype.number({ min: 1, max: 2000000000 }));
        cy.wait(2000);     

        // Ejemplo de seleccionar una opción de una lista desplegable

        cy.get('#planId').select('Intermediate');
        cy.wait(2000);
      

        // Rellenar el campo de imagen
        cy.get('#picture').clear();
        cy.wait(2000);
        cy.get('#picture').type(faker.internet.url());
        cy.wait(2000);


        //Click sobre formulario de geografia
        cy.get('#uncontrolled-tab-example-tab-0').click();
        cy.wait(3000);

        // Rellenar el campo de país
        cy.get('#countryId').select('Ecuador');
        cy.wait(3000);



        // Rellenar el campo de estado
        cy.get('#stateId').select('Guayas');
        cy.wait(4000);



        // Rellenar el campo de ciudad
        cy.get('#cityId').select('Guayaquil');
        cy.wait(4000);



        //Click sobre formulario de alimentos
        cy.get('#uncontrolled-tab-example-tab-1').click();
        cy.wait(2000);

        cy.get(":nth-child(1) > div > .m-2 > .form-check-input").click();
        cy.wait(1000);

        cy.get('#typeOfNutritionId').select('NutritionType');
        cy.wait(2000);        

        //Click sobre formulario de deportivo
        cy.get('#uncontrolled-tab-example-tab-2').click();
        cy.wait(1000);        
        cy.get('#sportLevel').select('Básico');
        cy.wait(2000);           

        
        // Enviar el formulario

      
        cy.contains('Guardar').click();
        
     

        
    });
  

});
