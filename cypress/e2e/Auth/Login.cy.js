const { PageObject } = require("../../pageObjects/PageObject");

let pageObj = new PageObject();
describe("Login", () => {
  before(() => {
    pageObj.loadDataElements();
  });
  it(
    "Login user", ()=>{
      pageObj.generateAction("login", "main page", "load page");
      pageObj.waiting(3500);
      pageObj.generateAction("login","link inicio session","click");
      pageObj.waiting(3500);
      pageObj.generateActionTypeValue("login", "txtEmail","nathanbelt23@gmail.com");
      pageObj.waiting(1000);
      pageObj.generateActionTypeValue("login", "txtPassword","Hope2028*");
      pageObj.waiting(1000);
      pageObj.generateAction("login","btnLogin","click");
    }
  );


});