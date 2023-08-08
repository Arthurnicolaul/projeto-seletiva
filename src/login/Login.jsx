import {
  MDBBtn,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow
} from 'mdb-react-ui-kit';
import React from 'react';
import { Link } from 'react-router-dom';
import '../login/Login.css';

function App() {
  return (
    <MDBContainer className="my-5 gradient-form d-flex align-items-center justify-content-center vh-100 overflow-hidden">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column">

            <p className="text-center">Please login to your account</p>
            <div className="mb-4 text-center">
              <label htmlFor="email" className="form-label">Email address</label>
              <MDBInput id='email' type='email' placeholder="Enter your email" />
            </div>
            <div className="mb-4 text-center" >
              <label htmlFor="password" className="form-label">Password</label>
              <MDBInput id='password' type='password' placeholder="Password" />
            </div>
            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            </div>
            <div className="text-center mb-5">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
  <p className="mb-0">Don't have an account?</p>
  <Link to="/signup">
    <MDBBtn outline className='mx-2' color='danger'>
      sign-up
    </MDBBtn>
  </Link>
</div>
          </div>
        </MDBCol>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4">
              <h4 className="text-center mb-4">Welcome to Neki</h4>
              <p className="small mb-0 text-center">
                Our company takes full care of the personal data of our users, thus keeping the user's privacy always in the first place, for the best experience of our users.
              </p>
            </div>
          </div>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;

