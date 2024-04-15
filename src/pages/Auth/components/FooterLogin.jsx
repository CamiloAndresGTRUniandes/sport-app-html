import { Link } from "react-router-dom";

export const FooterLogin = () => {
  return (
    <div className="text-center">
      <p className="mb-1 pb-lg-2" style={{ color: "#393f81" }}>
        No tienes cuenta?{" "}
        <Link to="/register" className="small text-info">
          Registrarse aquí
        </Link>
      </p>
      <div className="d-flex text-center items-center d-flex justify-content-md-center">
        <a href="#!" className="small text-info me-1 text-center">
          Términos de uso.
        </a>
        <a href="#!" className="small text-info">
          Política de privacidad
        </a>
      </div>
      <footer
        className="site-footer style-1 bg-img-fix footer-action d-flex justify-content-md-center"
        id="footer"
      >
        <div className="footer-bottom text-center">
          <div className="d-flex justify-content-md-center">
            <span className="copyright-text">
              Copyright © 2024{" "}
              <Link
                to="https://uniandes.edu.co/"
                target="_blank"
                rel="noreferrer"
              >
                Grupo-13
              </Link>
              . Todos los derechos reservados
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
