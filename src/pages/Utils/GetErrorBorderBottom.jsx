import { getIn } from "formik";

export const GetErrorBorderBottom=(errors, fieldName)=> {
  if (getIn(errors, fieldName)) {
    
    return {
      borderBottom: '2px solid red' 
    };
  }
}
