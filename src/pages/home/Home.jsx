import {
  MDBInput
} from 'mdb-react-ui-kit';
import { React, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { api } from '../../service/api';
import '../home/Home.css';
import Header from './../../header/header';

function App() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    api.get('/skill')
      .then(response => {
        setChampions(response.data); 
      })
      .catch(error => {
        console.error('Erro ao carregar dados da API:', error);
      });
  }, []);
  useEffect(() => {
    api.post('/usuarioSkill/register')
      .then(response => {
        setChampions(response.data); 
      })
      .catch(error => {
        console.error('Erro ao carregar dados da API:', error);
      });
  }, []);
  const handleAddClick = (championId) => {

    console.log(`Adicionando campeão com ID: ${championId}`);
  };
  return (
    <>
    <div className='fundo '>
    <Header></Header>
    <main>
    <div className="text-center" data-bs-theme="dark" style={{ marginLeft:'80vh', marginTop:'2vh' }}>
  {champions.map(champion => (
    <Card key={champion.id} style={{ width: '25rem', top: '10vh', marginRight: '20vh' }}>
      <Card.Img variant="top" src={champion.imagem} />
      <Card.Body>
        <Card.Title>{champion.nome}</Card.Title>
        <Card.Text>{champion.description}</Card.Text>
        <Button variant="primary" onClick={() => handleAddClick(champion.id)}>Adicionar</Button>
          <label htmlFor="">
          <MDBInput id='text' type='text' placeholder="versao/lv" style={{marginLeft:'20px'}}/>
          </label>
        </Card.Body>
      </Card>
      
        ))}
    </div>


  
  </main>
  </div>
  </>
  
  );
}

export default App;
