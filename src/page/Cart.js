import React from 'react';
import styled from 'styled-components';
import { Link} from 'react-router-dom';
import Header from '../Componenet/Header';
import ShoppingCartImg from '../images/shopping-cart.png';
const CartWrapper = styled.div`
    width: 90vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: #8a8a8a;
    margin:0 auto;
`;

const CartName = styled.div`
    font-size: 24px;
    margin-top: 65px;
    padding: 40px 0 15px;
`;

const Counter = styled.div`

`;

const ItemHeader = styled.div`
    display: flex;
    width: 80vw;
    justify-content: space-between;
    font-size: 14px;
    align-items: center;
    padding: 10px 30px;

`;

const ItemHeaderContent = styled.div`
`;

const ItemHeaderContentWrapper = styled.div`
    display: flex;
    width: 38vw;
    justify-content: space-between;
    align-items: center;
`;

const Item = styled.div`

`;


const CartImg = styled.div`
    width: 100px;
    height: 100px;
    cursor: pointer;
    background-image: url(${ShoppingCartImg});
    background: contain;
    background-size: 100% 100%;
    opacity: 0.3;
    margin-bottom: 20px;
`;

const Shopping = styled.div`
    height: 55vh;
    width: 100%;
    border-top: 1px solid #8a8a8a;
    border-bottom: 1px solid #8a8a8a;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;


const Price = styled.div`
    margin-right: 30px;   
`;

const ShoppingButton = styled.button`
    border: 1px solid #8a8a8a;
    padding: 10px 30px;
    border-radius: 5px;
    width: 60vw;
    background: none;
    outline: none;
    margin: 0 auto;
    &:active{
        background: #fdfdfd;
    }
`;

const ShoppingButtonWrapper = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content:center;
    margin-top: 10vh;
`;



function Cart() {
    return (
        <>
            <Header/>
            <CartWrapper>
                <CartName> 장바구니 <Counter/> </CartName>
                <ItemHeader>
                    <Item>Item</Item>
                    <ItemHeaderContentWrapper>
                        <ItemHeaderContent>수량</ItemHeaderContent>
                        <ItemHeaderContent>배송수단</ItemHeaderContent>
                        <ItemHeaderContent>배송비</ItemHeaderContent>
                    </ItemHeaderContentWrapper>
                    <Price>가격</Price>
                </ItemHeader>
                <Shopping>
                    <CartImg/>
                    장바구니가 비어있습니다.
                </Shopping>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <ShoppingButtonWrapper>
                    <ShoppingButton>
                        쇼핑계속하기
                    </ShoppingButton>
                    </ShoppingButtonWrapper>
                </Link> 
            </CartWrapper>
        </>
    )
}

export default Cart;