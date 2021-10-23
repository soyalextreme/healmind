import React from 'react';

import styled from "styled-components";

import ButtonRedirect from '../components/ButtonRedirect';

const MainWrapper = styled.div`
  height: 80vh;
  margin: auto;
  margin-top: 10rem;


  h1 {
    margin: 2rem;
    text-align: center;
  }

  img {
    width: 30vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  h3 {
    margin: 2rem;
    text-align: center;
    font-style: italic;
  }

  .button-holder {
    display: flex;
    width: 70vw;
    margin: auto;
    text-align: center;
    justify-content: space-between;
  }
`;

const App = () => {

  return (
    <MainWrapper>
      <section>
        <img src="/static/meditation.svg" alt="meditation-img" />
        <h3>La mejor forma de cuidarte emocionalmente.</h3>
      </section>
      <div className="button-holder">
        <ButtonRedirect text="Comenzar ya!" redirect="/getstarted" />
        <ButtonRedirect text="Sobre nosotros" redirect="/about" />
      </div>
    </MainWrapper>
  );
}

export default App;