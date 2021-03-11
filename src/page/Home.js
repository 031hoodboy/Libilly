import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import HomeHeader from '../Componenet/HomeHeader';
import Content from '../HomeComponent/Content';
import Footer from '../Componenet/Footer.js';
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
            <HomeHeader></HomeHeader>
            <Content/>
        </CenterAligne>
        <Footer/>
        </>
    )
}

export default Home;