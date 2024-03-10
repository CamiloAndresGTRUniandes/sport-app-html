import React from 'react';
import eliImage from '../assets/images/about/pic7.png';

import { Link } from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBIcon,
  MDBCheckbox

} from 'mdb-react-ui-kit';

const Registro = () => {
  const handleOlvidarContrasenaClick = () => {
    console.log("Olvidaste tu contraseña?");
  };

  return (
    <div  >
      {/* Navbar */}
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarNav right className='d-flex flex-row'>
            <MDBNavbarItem>
              <Link to="/" className="small text-muted" onClick={handleOlvidarContrasenaClick} style={{ color: '#393f81' }}>
                <div className="section-head">
                  <h2 className="title"><span>SPORTAPP</span></h2>
                </div>
              </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden w-80' style={{maxWidth:"80%" }}>
        <MDBRow>
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
            <MDBCardImage src={eliImage} alt="login form" className='rounded-start w-100' />
          </MDBCol>

          <MDBCol md='6' className='position-relative'>
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <MDBCard className='my-5 bg-glass'>
              <MDBCardBody className='p-5'>
                <div className="section-head">
                  <h2 className="title">REGÍSTRATE EN <span>SPORTAPP</span></h2>
                </div>

                <MDBRow >
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='Nombres' id='form1' type='text' />
                  </MDBCol>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='Apellidos' id='form2' type='text' />
                  </MDBCol>
                </MDBRow>

                <MDBInput wrapperClass='mb-4' label='Usuario' id='form3' type='email' />
                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' />
                <MDBInput wrapperClass='mb-4' label='Contraseña' id='form4' type='password' />
                <MDBInput wrapperClass='mb-4' label='Verificar contraseña' id='form4' type='password' />



                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Aceptar términos y condiciones' />
                </div>

                <div className='d-flex justify-content-center mb-4'>
                <button
                name="submit"
                value="Submit"
                type="submit"
                onClick={(e) => e.preventDefault()}
                className='btn btn-primary btn-lg btn-skew' >
                  <span>Registrarse</span>
                </button>
                </div>

                <div className="text-center">
                  <p>Regístrate con:</p>
                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm" />
                  </MDBBtn>
                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="sm" />
                  </MDBBtn>
                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm" />
                  </MDBBtn>
                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Registro;
