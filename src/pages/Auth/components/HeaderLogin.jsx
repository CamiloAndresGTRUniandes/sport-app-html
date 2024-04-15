import {
  MDBContainer,MDBNavbar,MDBNavbarItem,MDBNavbarNav} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export const HeaderLogin = () => {
  return (
    <>
          <MDBNavbar expand="lg" light bgColor="light">
                  <MDBContainer fluid>
                    <MDBNavbarNav right className="d-flex flex-row">
                      <MDBNavbarItem>
                        <Link
                          to="/"
                          className="small text-muted"
                          style={{ color: "#393f81" }}
                        >
                          <div className="section-head">
                            <h2 className="title">
                              <span>SPORTAPP</span>
                            </h2>
                          </div>
                        </Link>
                      </MDBNavbarItem>
                    </MDBNavbarNav>
                  </MDBContainer>
                </MDBNavbar>
    </>
  )
}
