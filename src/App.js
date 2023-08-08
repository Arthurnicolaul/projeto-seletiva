import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './cadastro/Cadastro.jsx'; // Importe o componente para a tela de registro
import SignIn from './login/Login.jsx'; // Importe o componente para a tela de login


    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      );
    }
 

export default App;
