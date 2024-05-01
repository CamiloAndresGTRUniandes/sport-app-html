const { PageObject } = require("../../pageObjects/PageObject");

let pageObj = new PageObject();
describe("Register", () => {
  before(() => {
    pageObj.loadDataElements();
  });
  it(
    "create user", ()=>{
      var password="Demos1234*";
      pageObj.generateAction("login", "main page", "load page");
      pageObj.waiting(1500);
      pageObj.generateAction("login","link inicio session","click");
      pageObj.waiting(1500);
      pageObj.generateAction("register","lnkRegister","click");
      pageObj.waiting(1500);
      pageObj.generateAction("register","txtName","type");
      pageObj.waiting(1000);
      pageObj.generateAction("register","txtLastName","type");
      pageObj.waiting(1000);
      var email=  pageObj.generateAction("register","txtEmail","type");
      pageObj.generateActionTypeValue("register","txtPassword",password);
      pageObj.generateActionTypeValue("register","txtConfirmPassword",password);
      //pageObj.generateAction("register","btnRegister","click");
      cy.get(".btn-primary > span").click();
      pageObj.waiting(3500);
      pageObj.generateActionTypeValue("login", "txtEmail",email);
      pageObj.waiting(1000);
      pageObj.generateActionTypeValue("login", "txtPassword",password);
      pageObj.waiting(1000);
      pageObj.generateAction("login","btnLogin","click");
      
    }
  );

});