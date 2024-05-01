const { PageObject } = require("../../pageObjects/PageObject");
const { InfoConstants } = require("../Constants/InfoConstants");
let infConst = new InfoConstants();
let pageObj = new PageObject();
describe("Login", () => {
  before(() => {
    pageObj.loadDataElements();
    infConst = new InfoConstants();
  });
  it(
    "Create recommendation for user", ()=>{
      const   key= infConst.getKeyAsociate();
      const   imageTest=infConst.getImageTest();
      const   seguimientoId=infConst.getTrackingId();
      const   email=infConst.getEmailAsociate();

      pageObj.generateAction("login", "main page", "load page");
      pageObj.waiting(3500);
      pageObj.generateAction("login","link inicio session","click");
      pageObj.waiting(3500);
      pageObj.generateActionTypeValue("login", "txtEmail",email);
      pageObj.waiting(1000);
      pageObj.generateActionTypeValue("login", "txtPassword",key);
      pageObj.waiting(1000);
      pageObj.generateAction("login","btnLogin","click");
      pageObj.waiting(3500);
      pageObj.generateAction("main", "linkMenuAsociado", "click");
      pageObj.waiting(1000);
      pageObj.generateAction("main", "linkSeguimiento", "click");
      pageObj.waiting(2500);
      pageObj.generateAction("user-tracking", "btnAddRecommendation", "click");
      pageObj.waiting(2500);
      pageObj.generateAction("detail-user-recommendation", "btnNewRecommendation", "click");
      pageObj.waiting(2500);
      pageObj.generateActionTypeValue("edit-user-recommendation", "txtImage",imageTest);
      pageObj.waiting(1000);
     // pageObj.generateAction("edit-user-recommendation", "txtRecommendation", "type");
      pageObj.waiting(500);
      pageObj.generateAction("edit-user-recommendation", "cboTypeOfRecommendation", "select",seguimientoId);
      pageObj.waiting(500);
      pageObj.generateAction("edit-user-recommendation", "txtDetail", "type");
      pageObj.waiting(500);
      pageObj.generateAction("edit-user-recommendation", "txtMuscleWin", "type");
      pageObj.waiting(500);
      pageObj.generateAction("edit-user-recommendation", "txtPressInBan", "type");
      pageObj.waiting(500);
      pageObj.generateAction("edit-user-recommendation", "txtArmCms", "type");
      pageObj.waiting(500);
      pageObj.generateAction("edit-user-recommendation", "txtSquatPress", "type");
      pageObj.waiting(500);
      pageObj.generateActionTypeValue("edit-user-recommendation", "txtRecommendation", "Tem title");
      pageObj.waiting(500);
      pageObj.generateAction("edit-user-recommendation", "btnSave", "click");

    }
  );


});