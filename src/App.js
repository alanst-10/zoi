import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

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
    {name: 'Cassio', position: 'goleiro', pic: './components/images/cassio.jpg'},
    {name: 'Fagner', position: 'lateral direito', pic:'./components/images/fagner.jpg'},
    {name: 'João Victor', position: 'zagueiro', pic:'./components/images/joao.jpg'},
    {name: 'Gil', position: 'zagueiro', pic:'./components/images/gil.jpg'},
    {name: 'Fabio Santos', position: 'lateral esquerdo', pic:'./components/images/f-santos.jpg'},
    {name: 'Du Queiroz', position: 'volante', pic:'./components/images/du.png'},
    {name: 'Renato Augusto', position: 'meia central', pic:'./components/images/r8.jpg'},
    {name: 'Maycon', position: 'meia central', pic:'./components/images/maycon.jpg'},
    {name: 'Roger Guedes', position: 'atacante', pic:'./components/images/guedes.jpg'},
    {name: 'Willian', position: 'atacante', pic:'./components/images/willian.jpg'},
    {name: 'Jô', position: 'centro-avante', pic:'./components/images/jo.jpg'}
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
          return <li key={index}><strong>Nome:</strong> {jogador.name} - <strong>Posição:</strong> {jogador.position} <img src={require(jogador.pic)} /></li>
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
