import { getIn } from "formik";

export const GetErrorBorder=(errors, fieldName)=> {
  if (getIn(errors, fieldName)) {
    return {
      border: "1px solid red ",
    };
  }
}
