import React from 'react';
import styled from 'styled-components';
import Header from '../Componenet/Header';

const Test = styled.div`
    width: 100vw;
    height: 100vh;
    background: #fff;
`;

function Shop() {
    return (
        <>
        <Header/>
        <Test/>
        </>
    )
}

export default Shop;