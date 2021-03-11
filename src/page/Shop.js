import React from 'react';
import styled from 'styled-components';
import Header from '../Componenet/Header';
import Hodie031Img from '../images/hoodie031.png';
import DogHoddieImg from '../images/doghoddie.png';
import LbMtmImg from '../images/lbmtm.png';
import LbPantsImg from '../images/lbpants.png';
import Ma1Img from '../images/ma1.png';
import ShortSleeveImg from '../images/031shortsleeve.png';

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

const Hoddie = styled.div`
    width: 250px;
    height: 250px;
    background: red;
    margin: 20px auto;
    background-image: url(${Hodie031Img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const DogHoddie = styled(Hoddie)`
    background-image: url(${DogHoddieImg});
`;

const LbMtm = styled(Hoddie)`
    background-image: url(${LbMtmImg});
`;

const LbPants = styled(Hoddie)`
    background-image: url(${LbPantsImg});
`;

const Ma1 = styled(Hoddie)`
    background-image: url(${Ma1Img});
`;
const ShortSleeve = styled(Hoddie)`
    background-image: url(${ShortSleeveImg});
`;


function Shop() {
    return (
        <>
        <Header/>
        <ShopBlock>
            <ShopWrapper>
                <Hoddie></Hoddie>
                <DogHoddie></DogHoddie>
                <LbMtm></LbMtm>
                <LbPants></LbPants>
                <Ma1></Ma1>
                <ShortSleeve></ShortSleeve>
            </ShopWrapper>
        </ShopBlock>
        </>
    )
}

export default Shop;