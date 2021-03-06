import React from 'react';
import styled from 'styled-components';
import Header from '../Componenet/Header';

const Test = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 200px;
`;

function Shop() {
    return (
        <>
        <Header/>
        <Test>
            상점입니다.
        </Test>
        </>
    )
}

export default Shop;