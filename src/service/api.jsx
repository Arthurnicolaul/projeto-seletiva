import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";

const token = localStorage.getItem('token'); // Certifique-se de substituir 'token' pelo nome correto que você usa

// Cria uma instância do axios com a baseURL e o token no cabeçalho
export const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

export const createSession = async (username, password) => {
    return api
    .post(`http://localhost:8080/usuario/sign-in`, {
        username: username,
        password: password
    })
    .catch((response) => {
        toast.warning(response.data)
    });
}

export function UseAPI(url) {
    const [carregando, setCarregando] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        api
          .get(url)
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            setError(error);
          })
          .finally(() => {
            setCarregando(false);
          });
      }, []);
    
      return { data, carregando, error };
}