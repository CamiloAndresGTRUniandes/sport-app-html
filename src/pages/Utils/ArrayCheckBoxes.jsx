import React from "react";
import { Field, useFormikContext } from "formik";
  // istanbul ignore next
export const ArrayCheckBoxes = ({
  data,
  nameGroup,
  label,
  classDivMain,
  values,
}) => {
  const { setFieldValue } = useFormikContext(); // Obtén la función setFieldValue de useFormikContext
  return (
    <div className={classDivMain}>
      <label id={`${nameGroup}-group`} className="input-group-text">
        {label}
      </label>
      <div role="group" aria-labelledby={`${nameGroup}-group`}>
        {data.map((element) => (
          <label key={element.id} className="m-2">
            <Field
              type="checkbox"
              className="form-check-input"
              name={nameGroup} 
              value={element.id}
              checked={
                values[nameGroup] && values[nameGroup].includes(element.id)
              } 
              onChange={(e) => {
                const isChecked = e.target.checked;
                const value = element.id;
                const currentValues = values[nameGroup] || [];

                let newValues;
                if (isChecked) {
                  newValues = [...currentValues, value];
                } else {
                  newValues = currentValues.filter((val) => val !== value);
                }

                setFieldValue(nameGroup, newValues); // Actualiza el valor del campo usando setFieldValue
              }}
            />
            {" " + element.name}
          </label>
        ))}
      </div>
    </div>
  );
};
