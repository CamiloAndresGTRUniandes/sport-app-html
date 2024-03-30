import React from "react";
import { ErrorMessage, Field } from "formik";
import { GetErrorBorderBottom } from "./GetErrorBorderBottom";
export const TextBoxEditValidation = ({
  classDiv,
  idText,
  label,
  type,
  formikForm,
}) => {


  return (
    <div >
    <div className={classDiv}>
      <label className="input-group-text" htmlFor={idText}>
        {label}{" "}
      </label>
      <Field
        id={idText}
        type={type}
        name={idText}
        className="form-control"
        size="lg"
        aria-label={idText}
        aria-describedby={idText}
         style={GetErrorBorderBottom(formikForm.errors, idText)}
      />
    </div>
    {/* <ErrorMessage className=" input-group-text text-red" name={idText}>
        {(errorMsg) => <div className="text-red">{errorMsg}</div>}
      </ErrorMessage> */}

    </div>
  );
};
