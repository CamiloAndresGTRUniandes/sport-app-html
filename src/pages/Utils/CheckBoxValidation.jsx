import { Field } from "formik";

export const CheckBoxValidation = ({ classDiv, idCheck, label, formikForm }) => {
  return (
    <div className={classDiv}>
      <label className="input-group-text" htmlFor={idCheck}>
        {label}{" "}
      </label>
      <Field
        id={idCheck}
        type="checkbox"
        role="switch"
        name={idCheck}
        className="form-check-input"
        size="lg"
      />

      {/* <ErrorMessage className=" input-group-text text-red" name={idText}>
        {(errorMsg) => <div className="text-red">{errorMsg}</div>}
      </ErrorMessage> */}
    </div>
  );
};
