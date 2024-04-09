import { Formik } from "formik";
import useFormData from "../Hooks/usePerfilGeografico";


export const PerfilGeografico = () => {
  const {
    paises,
    departamentosPorPais,
    ciudadesPorDepartamento,
    handleCountryChange,
    handleDepartmentChange,
    formik,
  } = useFormData();

  return (
    <Formik
      initialValues={formik.values}
      onSubmit={(valores, { setSubmitting }) => {
        console.log(valores);
        console.log("formulario enviado");
        formik.handleSubmit();
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, values, isSubmitting, setFieldValue }) => (
        <form className="formulario" onSubmit={handleSubmit}>
          <div className='row animate__animated animate__fadeInUpBig'>
            <div className='col-md-12 col-lg-12 col-sm-12'>
              <div className="input-group mb-3 input-line">
                <span className="input-group-text" id="pais">País</span>
                <select className="form-control" aria-label="pais" name="pais" onChange={(e) => { handleCountryChange(e); setFieldValue('pais', e.target.value) }} value={values.pais}>
                  <option value="">Selecciona un país</option>
                  {paises.map((pais) => (
                    <option key={pais.id} value={pais.id}>{pais.nombre}</option>
                  ))}
                </select>
              </div>

              <div className="input-group mb-3 input-line">
                <span className="input-group-text" id="Estado">Estado</span>
                <select className="form-control" aria-label="Estado" name="departamento" onChange={(e) => { handleDepartmentChange(e); setFieldValue('departamento', e.target.value) }} value={values.departamento}>
                  <option value="">Selecciona un departamento</option>
                  {departamentosPorPais.map((departamento) => (
                    <option key={departamento.id} value={departamento.id}>{departamento.nombre}</option>
                  ))}
                </select>
              </div>

              <div className="input-group mb-3 input-line">
                <span className="input-group-text" id="Ciudad">Ciudad</span>
                <select className="form-control" aria-label="Ciudad" name="ciudad" onChange={(e) => setFieldValue('ciudad', e.target.value)} value={values.ciudad}>
                  <option value="">Selecciona una ciudad</option>
                  {ciudadesPorDepartamento.map((ciudad) => (
                    <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Enviar</button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}
    </Formik>
  );
};

export default PerfilGeografico;
