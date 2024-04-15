

import PageTitle from "../../../elements/PageTitle";

import Card from 'react-bootstrap/Card';
import 'animate.css';
import { EditUserProfile } from "../Components";

const UserProfile = () => {
  return (
    <>
      <div className="page-content bg-white">
        <PageTitle parentTitle="Pages" activePage="Perfil de usuario" />
        <div className="container">
          <Card className='animate__animated animate__fadeInRightBig' >
            <Card.Body>
              <Card.Title>Registro de perfil de usuario</Card.Title>
              <Card.Text className='mt-5'>
                Registra tu perfil para prestarte la mejor asesoria
              </Card.Text>
                  <EditUserProfile/>
            </Card.Body>
          </Card>
        </div>

      </div>
    </>
  );
};

export default UserProfile;
