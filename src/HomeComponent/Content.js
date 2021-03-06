import React from 'react';
import styled from 'styled-components';
import LogoImg from '../images/logo.png';

const MyName = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    font: italic 12px serif;
    margin: 10px;
`;

const Wrapper = styled.div`
    margin: 0 auto;
    height: 100%;
    font-size: 250px;
    font-weight: 600;
    align-items: center;
    display: flex;
`;

const Logo = styled.div`
    width: 70vw;
    height: 200px;
    background-image: url(${LogoImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;    
`;
 
function Contnet () {
    return (
        <>
        <Wrapper>
            <Logo/>
        </Wrapper>
        <MyName>
            made by. hoodboy
        </MyName>
        </>
    )
}

export default Contnet;