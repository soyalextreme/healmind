import React from 'react';

import styled from "styled-components";

import ButtonRedirect from '../components/ButtonRedirect';

const MainWrapper = styled.div`
  padding: 10vh 10vw;
  width: 50vw;
  height: 80vh;
  margin: auto;


  h1 {
    margin: 2rem;
    text-align: center;
  }


  h3 {
    margin: 2rem;
    text-align: center;
    font-style: italic;
  }

  .button-holder {
    padding: 2rem;
    display: flex;
  }
`;

const App = () => {

  return (
    <MainWrapper>
      <h1>Bienvenido a HealMind.</h1>
      <h3>La mejor forma de cuidarte emocionalmente.</h3>
      <div className="button-holder">
        <ButtonRedirect text="Comenzar ya!" redirect="/getstarted" />
        <ButtonRedirect text="Sobre nosotros" redirect="/about" />
      </div>
    </MainWrapper>
  );
}

export default App;