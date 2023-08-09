import React, { useContext } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../context/auth.js";
import Cadastro from '../pages/cadastro/Cadastro.jsx';
import Home from '../pages/home/Home.jsx';
import Login from '../pages/login/Login.jsx';
import Skills from '../pages/skills/skills.jsx';

export function Router() {

  const Private = ({ children }) => {
    const{ authenticated, loading } = useContext(UserContext);
    if(loading) {
        return <div> Carregando </div>;
    }
    if(!authenticated) {
        return(
            <Navigate to="/"/>
        )
    }

    return children;
}

 return (
    <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Cadastro />} path="/cadastro" />
        <Route element={<Private><Home /></Private>} path="/home" />
        <Route element={<Private><Skills /></Private>} path="/skills" />
    </Routes>
  );
}