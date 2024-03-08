import React from 'react';
import { Link } from 'react-router-dom';
import eliImage from '../assets/images/main-slider/slider2/hero.png';
import patternsvg1 from "../assets/images/pattern/pattern1.svg";


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

} from 'mdb-react-ui-kit';




const Login = () => {
  const handleOlvidarContrasenaClick = () => {
    console.log("Olvidaste tu contraseña?");
  };

  return (
    <div>
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

      {/* Main content */}
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className='g-0'>
            <MDBCol md='6'>
              <MDBCardImage src={eliImage} alt="login form" className='rounded-start w-100' />
              
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>
                <div className='d-flex flex-row mt-2'>
                  <div className="section-head">
                    <h2 className="title">Bienvenido a <span>SPORTAPP</span></h2>
                  </div>
                  
                </div>

                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Acceder a tu cuenta</h5>
                <MDBInput wrapperClass='mb-4' label='Email' id='emailFormControlLg' type='email' size="lg" />
                <MDBInput wrapperClass='mb-4' label='Contraseña' id='passwordFormControlLg' type='password' size="lg" />



                <div className='d-flex justify-content-center mb-4'>
                <button
                name="submit"
                value="Submit"
                type="submit"
                onClick={(e) => e.preventDefault()}
                className='btn btn-primary btn-lg btn-skew' >
                  <span>Iniciar sesion</span>
                </button>
                </div>

                <div className='mb-5'></div>

                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                  No tienes cuenta?{' '}
                  <Link to="/register" className="small text-muted" onClick={handleOlvidarContrasenaClick} style={{ color: '#393f81' }}>
                    Registrarse aquí
                  </Link>
                </p>
                <div className='d-flex flex-row justify-content-start'>
                  <a href="#!" className="small text-muted me-1">Términos de uso.</a>
                  <a href="#!" className="small text-muted">Política de privacidad</a>
                </div>
      
                    


                <footer className="site-footer style-1 bg-img-fix footer-action" id="footer">
                  <div className="footer-bottom">
                    <div className="text-center">
                      <span className="copyright-text">Copyright © 2024 <Link to="https://uniandes.edu.co/" target="_blank" rel="noreferrer">Grupo-13</Link>. Todos los derechos reservados</span>
                    </div>
                  </div>
                </footer>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Login;
