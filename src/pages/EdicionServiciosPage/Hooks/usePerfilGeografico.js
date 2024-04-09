import { useState, useEffect } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { formularioApi } from "../Api/EdicionServiciosApi";

const usePerfilGeografico = () => {

  const validationSchema = Yup.object().shape({
    pais: Yup.string().required('País requerido'),
    departamento: Yup.string().required('Departamento requerido'),
    ciudad: Yup.string().required('Ciudad requerida'),
  });
  const [paises, setPaises] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [ciudadesPorDepartamento, setCiudadesPorDepartamento] = useState([]);
  const [departamentosPorPais, setDepartamentosPorPais] = useState([]);
  
  const formik = useFormik({
    initialValues: { pais: "", departamento: "", ciudad: "" },
    validationSchema: validationSchema,
    onSubmit: (valores, { setSubmitting }) => {
      console.log(valores);
      console.log("formulario enviado");
      setSubmitting(false);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [paisesResponse, departamentosResponse, ciudadesResponse] = await Promise.all([
          formularioApi.get(`/paises`),
          formularioApi.get(`/departamentos`),
          formularioApi.get(`/ciudades`)
        ]);

        setPaises(paisesResponse.data);
        setDepartamentos(departamentosResponse.data);
        setCiudades(ciudadesResponse.data);        

      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchData();
  }, []);


  const handleCountryChange = async (e) => {
    const selectedCountry = e.target.value;
    formik.setFieldValue("departamento", ""); 
    formik.setFieldValue("ciudad", ""); 
    formik.setFieldValue("pais", selectedCountry); 
    setCiudadesPorDepartamento([]);
    const departamentoPais = await formularioApi.get(`/departamentos?pais_id=${selectedCountry}`);
    setDepartamentosPorPais(departamentoPais.data);
  };

  const handleDepartmentChange = async (e) => {
    const selectedDepartamento = e.target.value;
    formik.setFieldValue("ciudad", ""); 
    formik.setFieldValue("departamento", selectedDepartamento); 
    const ciudadesDepartamento = await formularioApi.get(`/ciudades?departamento_id=${selectedDepartamento}`);
    setCiudadesPorDepartamento(ciudadesDepartamento.data);
  };



  return {
    paises,
    departamentos,
    departamentosPorPais,
    ciudadesPorDepartamento,
    handleCountryChange,
    handleDepartmentChange,
    formik,
 
  };
};

export default usePerfilGeografico;
