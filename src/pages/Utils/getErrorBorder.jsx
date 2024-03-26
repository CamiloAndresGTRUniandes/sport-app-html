import { getIn } from "formik";

function getErrorBorder(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      border: "1px solid red",
    };
  }
}
export default getErrorBorder;
