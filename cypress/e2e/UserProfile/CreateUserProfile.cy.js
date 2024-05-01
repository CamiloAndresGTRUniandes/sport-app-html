const { PageObject } = require("../../pageObjects/PageObject");
const { InfoConstants } = require("../Constants/InfoConstants");


let pageObj = new PageObject();
let infConst = new InfoConstants();
describe("Creates user  profile", () => {
  before(() => {
    pageObj.loadDataElements();
    infConst = new InfoConstants();
  });
  it(
    "Login user", () => {
      pageObj.generateAction("login", "main page", "load page");
      pageObj.waiting(3500);
      pageObj.generateAction("login", "link inicio session", "click");
      pageObj.waiting(3500);
      pageObj.generateActionTypeValue("login", "txtEmail", "nathanbelt23@gmail.com");
      pageObj.waiting(1000);
      pageObj.generateActionTypeValue("login", "txtPassword", "Hope2028*");
      pageObj.waiting(1000);
      pageObj.generateAction("login", "btnLogin", "click");
      pageObj.waiting(2500);
      pageObj.generateAction("main-usuario", "lnkMiPerfil", "click");
      pageObj.waiting(2000);
      pageObj.generateAction("main-usuario", "lnkPerfilUsuario", "click");
      pageObj.waiting(3000);
      pageObj.generateAction("user-profile", "txtName", "type");
      pageObj.waiting(1000);
      pageObj.generateAction("user-profile", "txtLastName", "type");
      pageObj.waiting(1000);
      pageObj.generateAction("user-profile", "txtPhone", "type");
      pageObj.waiting(1000);
      pageObj.generateAction("user-profile", "txtBirthDate", "type");
      pageObj.waiting(1000);
      pageObj.generateAction("user-profile", "cboGender-select", "select", infConst.getGenreMale());
      pageObj.waiting(2000);

      //geography
      let geoCountry = infConst.getGeographicInfo();
      console.log("geoCountry: ", geoCountry);
      pageObj.generateAction("user-profile-geography", "cboCountry", "select", infConst.getGeographicInfo().countryId);
      pageObj.waiting(2000);
      pageObj.generateAction("user-profile-geography", "cboState", "select", infConst.getGeographicInfo().stateId);
      pageObj.waiting(2000);
      pageObj.generateAction("user-profile-geography", "cboCity", "select", infConst.getGeographicInfo().cityId);
      pageObj.waiting(2000);
      pageObj.generateAction("user-nutritional-profile", "tab-nutritional-profile", "click");
      pageObj.waiting(1000);
      pageObj.generateAction("user-nutritional-profile", "checkHasAllergies", "click");
      pageObj.waiting(1000);
      pageObj.generateAction("user-nutritional-profile", "cboNutritionType", "select", infConst.getNutritionType());
      pageObj.waiting(1000);
      pageObj.generateAction("user-nutritional-profile", "txtCaloriesNumber", "type");
      pageObj.waiting(1000);
      pageObj.generateAction("user-nutritional-profile", "checkLacteos", "click");
      pageObj.waiting(1000);
      pageObj.generateAction("user-nutritional-profile", "checkFrutosSecos", "click");
      pageObj.waiting(1000);
      pageObj.generateAction("user-nutritional-profile", "checkGluten", "click");
      pageObj.waiting(1000);
      pageObj.generateAction("user-sport-profile", "tab-sport-profile", "click");
      pageObj.waiting(1000);
      pageObj.generateAction("user-sport-profile", "txtExercisesByWeek", "type");
      pageObj.waiting(1000);
      pageObj.generateAction("user-sport-profile", "cboPhysicalLevel", "select",infConst.getPhisycalLevel());
      pageObj.waiting(1000);
      pageObj.generateAction("user-sport-profile", "txtInjuries", "type");

      pageObj.waiting(1000);
      pageObj.generateAction("user-profile", "btnGuardar", "click");

      
    }
  );



});