
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBContainer,
  MDBInput
} from 'mdb-react-ui-kit';
import React from 'react';
import { Link } from 'react-router-dom';
import '../cadastro/Cadastro.css';

function App() {
  return (
    <MDBContainer fluid>

      <div className="p-5 gradient-custom-2" style={{ height: '400px', width:'200vh'}}></div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{width:'50%', marginTop: '-700px', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>

          <div className="mb-4">
              <label htmlFor="email" className="form-label">Email address</label>
              <MDBInput id='email' type='email' placeholder="Enter your email" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="form-label">Password</label>
              <MDBInput id='email' type='email' placeholder="Password" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Confirm password</label>
              <MDBInput id='email' type='email' placeholder="Confirm password" />
            </div>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
          </div>

          
            <Link to="/">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" size='md'>sign up</MDBBtn>
                 </Link>

        </MDBCardBody>
      </MDBCard>
      </div>
    </MDBContainer>
  );
}

export default App;