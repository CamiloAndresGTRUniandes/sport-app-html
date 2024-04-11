import PageTitle from "../../../elements/PageTitle";

import Card from 'react-bootstrap/Card';
import 'animate.css';
import { CreateProductService } from "../Components";

const ProductServiceEdit = () => {
    return(<>
        <div className="page-content bg-white">
          <PageTitle parentTitle="Pages" activePage="Perfil de usuario" />
          <div className="container">
            <Card className='animate__animated animate__fadeInRightBig' >
              <Card.Body>
                <Card.Title>Registro de productos y/o servicios</Card.Title>
                <Card.Text className='mt-5'>
                  Agregar un nuevo producto o servicio
                </Card.Text>
                    <CreateProductService/>
              </Card.Body>
            </Card>
          </div>
    
        </div>
      </>)
    
};
export default ProductServiceEdit
