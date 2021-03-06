import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from '../Componenet/Header';
import Content from '../HomeComponent/Content';

const CenterAligne = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
  body{
    background: #fff;
  }
`;

function Home() {
    return (
        <>
        <GlobalStyle/>
        <CenterAligne>
            <Header>
            </Header>
            <Content/>
        </CenterAligne>
        </>
    )
}

export default Home;
