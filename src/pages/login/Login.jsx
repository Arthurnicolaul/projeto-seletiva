import axios from "axios";
import {
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow
} from 'mdb-react-ui-kit';
import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import { UserContext } from "../../context/auth";
import './Login.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();
  const { login, setChecked, setToken } = useContext(UserContext);




  const handleClickShowPassword = (e) => {
    e.preventDefault();
    if (showPassword === false) {
      setShowPassword(true);
    } 
    
    if (showPassword === true) {
      setShowPassword(false);
    }
  }

  const handleChangeCheck = (e) => {
    const { checked } = e.target;

    if (checked) {
      setChecked(true);
    }
  };

  function moveOverlay() {
    document.getElementById("login-container").classList.toggle("move");
  }

  function logar(e) {
    // e.preventDefault();
    axios
      .post(`http://localhost:8080/usuario/sign-in`, {
        username: username,
        password: password,
      },{
    })
      // Dentro do .then() após o login bem-sucedido
    .then((response) => {
      console.log(response);
      console.log(response.data.accessToken);
      login(username, password);
  
      setToken(response.data.accessToken);
   toast.success("Login realizado com sucesso!");
      setTimeout(() => {
      navigate('/home');
  }, 1000)
})
      .catch((error) => {
        console.log(error);
        toast.warning("Espaços vazios ou inválidos");
      });
      function getAuthToken() {
        return localStorage.getItem('authToken');
      }
  }
  return (
    <MDBContainer className="my-5 gradient-form d-flex align-items-center justify-content-center vh-100 overflow-hidden">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column">

            <p className="text-center">Please login to your account</p>
            <div className="mb-4 text-center">
              <label htmlFor="username" className="form-label">username</label>
              <MDBInput id='username' type='username' placeholder="Enter your username"  onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="mb-4 text-center" >
              <label htmlFor="password" className="form-label">Password</label>
              <MDBInput id='password' type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="d-flex justify-content-between mb-4" onChange={handleChangeCheck}>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            </div>
            <div className="text-center mb-5">
              <Button className="mb-4 w-100 gradient-custom-2"  onClick={logar}>Sign in</Button>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
  <p className="mb-0">Don't have an account?</p>
  <Link to="/cadastro">
    <Button  outline className='mx-2' color='danger' >
      sign-up
    </Button >
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

export default Login;

