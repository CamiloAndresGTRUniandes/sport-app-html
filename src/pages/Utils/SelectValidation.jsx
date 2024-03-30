import { useEffect, useState } from "react";
import { Field, useFormikContext } from "formik";
import { GetErrorBorderBottom } from "./GetErrorBorderBottom";

export const SelectValidation = ({
  classDiv,
  idSelect,
  label,
  data,
  onSelectManager,
  formFormik
}) => {
  const { setFieldValue, errors } = useFormikContext();
  const [valueSelected, setValueSelected] = useState("");

  useEffect(() => {
    if (onSelectManager) {
      onSelectManager(valueSelected, formFormik);
    }
  }, [onSelectManager, valueSelected]);

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    
    setValueSelected(value);
    setFieldValue(idSelect, value);
  };

  return (
    <>
      {data&&
        (
          <div className={classDiv}>
          <label className="input-group-text" htmlFor={idSelect}>
            {label}
          </label>
          <Field
            id={idSelect}
            as="select"
            name={idSelect}
            className="form-control"
            size="lg"
            aria-label={idSelect}
            aria-describedby={idSelect}
            style={GetErrorBorderBottom(errors, idSelect)}
            onChange={handleChange}
          >
            <option value="0">Selecciona</option>
            {data.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Field>
        </div>
        )
      }
    </>
 
  );
};

