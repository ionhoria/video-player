import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import Player from './Player';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body, html {
    padding: 0;
    margin: 0;
  }
`;

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Player />
      </AppContainer>
    </>
  );
}

export default App;
