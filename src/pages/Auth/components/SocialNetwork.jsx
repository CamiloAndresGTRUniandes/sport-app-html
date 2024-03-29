import React from 'react';
import {
  MDBBtn, MDBIcon
} from 'mdb-react-ui-kit';

export const SocialNetwork = () => {
  return (
   
    <div className="text-center">
    <p>Siguenos en:</p>
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
  )
}
