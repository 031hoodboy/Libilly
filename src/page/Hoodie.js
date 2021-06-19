import React from 'react';
import styled from 'styled-components';
import Header from '../Componenet/Header';
import HoodieImg from '../images/hoodie.png';

const ShopBlock = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 200px;
    padding-top: 65px;
`;

const ShopWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10vw;
    align-self: flex-start;
`;


const HoddieDiv = styled.div`
width: 100%;
    height: 3000px;
    background-image: url(${HoodieImg});


`;



function Hoddie() {
    return (
        <>
        <Header/>
        <ShopBlock>
            <ShopWrapper>
               <HoddieDiv></HoddieDiv>
            </ShopWrapper>
        </ShopBlock>
        </>
    )
}

export default Hoddie;