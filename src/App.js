import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import cassio from './components/images/cassio.jpg';
import du from './components/images/du.png';
import fabioSantos from './components/images/santos.jpg';
import fagner from './components/images/fagner.jpg';
import gil from './components/images/gil.jpg';
import guedes from './components/images/guedes.jpg';
import jo from './components/images/jo.jpg';
import joao from './components/images/joao.jpg';
import maycon from './components/images/maycon.jpg';
import rAugusto from './components/images/r8.jpg';
import willian from './components/images/willian.jpg';

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #D1D1D2;
  width: 100vw;
  height: 100vh;
`;

const STLDBotao = styled.button`
  background-color: #72418c;
  padding: 15px;
  border: none;
  border-radius: 7px;
  color: #FFF;
  cursor: pointer;
  font-family: 'Macondo', cursive;
  font-size: 25px;
  &:hover {
    background-color: #800080
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`;

const Verdade = styled.h1`
  font-family: 'Water Brush', cursive;
  font-size: 50px;
`;

function App() {

  const [ show, setShow ] = useState('false');

  let corinthians = [
    {name: 'Cassio', position: 'goleiro', pic: cassio},
    {name: 'Fagner', position: 'lateral direito', pic: fagner},
    {name: 'João Victor', position: 'zagueiro', pic: joao},
    {name: 'Gil', position: 'zagueiro', pic: gil},
    {name: 'Fabio Santos', position: 'lateral esquerdo', pic: fabioSantos},
    {name: 'Du Queiroz', position: 'volante', pic: du},
    {name: 'Renato Augusto', position: 'meia central', pic: rAugusto},
    {name: 'Maycon', position: 'meia central', pic: maycon},
    {name: 'Roger Guedes', position: 'atacante', pic: guedes},
    {name: 'Willian', position: 'atacante', pic: willian},
    {name: 'Jô', position: 'centro-avante', pic: jo}
  ];

  const handleClick = () => {
    if (show) {
      setShow(false)

    } else {
      setShow(true)
    }
  }

  return (
    <Container>
      <Header />
      <h2>Titulares do Corinthians:</h2>
      <ol>
        {corinthians.map((jogador, index) => {
          return <li key={index}><strong>Nome:</strong> {jogador.name} - <strong>Posição:</strong> {jogador.position} <img width="150" height="100" src={jogador.pic} /></li>
        })}
      </ol>

      <hr/><br/><br/><br/>
      <Content>
        <STLDBotao onClick={handleClick}>{show ? 'Ocultar' : 'Leia uma verdade'}</STLDBotao>

        { show &&
          <Verdade>O Palmeiras não tem mundial!!!</Verdade>
        }
        
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
