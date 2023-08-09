
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBContainer,
  MDBInput
} from 'mdb-react-ui-kit';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { UserContext } from "../../context/auth";
import './Cadastro.css';

function Cadastro() {
    const [username, setUsername] = useState("");
    const [password, setSenha] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const navigate = useNavigate();
    const { login, setChecked, setToken } = useContext(UserContext);
  
    const handleClickShowPassword = (e) => {
      e.preventDefault();
      setShowPassword(!showPassword);
    }
  
    function cadastrar() {
      if (password === confirmPassword) {
        axios
          .post("http://localhost:8080/usuario/sign-up", {
            username: username,
            senha: password,
            
          })
          
          .then((response) => {
            console.log(response);
            toast.success('Usuário cadastrado com sucesso!');
            navigate('/home');
          })
          .catch((error) => {
            console.log(error);
            toast.warning('Erro ao cadastrar usuário');
          });
      } else {
        toast.warning('As senhas não coincidem');
      }
    }
  return (
    <MDBContainer fluid>

      <div className="p-5 gradient-custom-2" style={{ height: '400px', width:'200vh'}}></div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{width:'50%', marginTop: '-700px', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>

          <div className="mb-4">
              <label htmlFor="username" className="form-label">username </label>
              <MDBInput id='username' type='text' placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <MDBInput id='password' type='password' placeholder="Password" onChange={(e) => setSenha(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="ConfirmPassword" className="form-label">Confirm password</label>
              <MDBInput id='ConfirmPassword' type='password' placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
          </div>

          
         
              <Button className="mb-4 w-100 gradient-custom-2" size='md' onClick={cadastrar} >sign up</Button >
          

        </MDBCardBody>
      </MDBCard>
      </div>
    </MDBContainer>
  );
}

export default Cadastro;