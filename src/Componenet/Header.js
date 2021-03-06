import React, {useState} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {Route,Link} from 'react-router-dom';
import Cancle from '../images/cancle.png';
import ProfileImg from '../images/user.png';
import CartImg from '../images/shopping-bag2.png';
import MenuIcon from '../images/menu.png';
import LibillyLogo from '../images/logo.png'

const Menu = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${MenuIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    &:hover{
        opacity: 0.6;
    }
`;

const HeaderWrappr = styled.div`
    width: 95vw;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    padding: 0 2.5vw;
    
`;

const RightContnet = styled.div`
    display: flex;
    width: 80px;
    justify-content: space-between;
`;

const Profile = styled.div`
    width: 32px;
    height: 32px;
    background-image: url(${ProfileImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    &:hover{
        opacity: 0.6;
    }
`;

const Cart = styled.div`
    width: 32px;
    height: 32px;
    background-image: url(${CartImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    &:hover{
        opacity: 0.6;
    }
`;


const Wrapper = styled.div`
    display: flex;
    width: 100vh;
    display: none;
    justify-content: space-between;
    ${props => props.open && css`
        display:flex;
    `}
`;
 
const Fadein = keyframes`
  0% {
    left: -200px;
  }
  100% {
    left: 0px;
  }
`;

const Fadeout = keyframes`
    0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
`;

const ModalWrapper = styled.div`
    width: 200px;
    height: 100vh;
    background-color: #fff;
    z-index: 1;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    animation: ${Fadein} 500ms ;

    ${props => props.open && css`
        display:flex;
        animation: ${Fadeout} 1s ;

    `}
`;



const ModalOpacity = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: absolute;
    top: 0;
    opacity: 0.1;
`;

const CancleButton = styled.div`
    width: 30px;
    height: 30px;

    background-image: url(${Cancle});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    left: 20px;
    top: 20px;

    &:hover{
        opacity: 0.4;
    }
`;

const Menu2 = styled.div`
    position: absolute;
    top: 70px;
    justify-content: center;
    cursor: pointer;
`;

const MenuContent = styled.div`
    margin-top: 20px;
    font-size: 15px;
    &:hover{
        color: #666;
    }
    width: 150px;
`;

const LibillyHome = styled.div`
    margin-top: 10px;
    width: 158px;
    height: 30px;
    cursor: pointer;
    background-image: url(${LibillyLogo});
    background: cover;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
`;

function Home() {
    const [open, setOpen] = useState(false);
    const onToggle = () => {
        setOpen(!open)
    }
    return (
        <>
            <HeaderWrappr>
                <Menu onClick={onToggle}/>
                <Link to="/" style={{textDecoration: 'none', color: "#000"}}>
                    <LibillyHome/>
                </Link>
                <RightContnet>
                    <Link to="/cart" style={{textDecoration: 'none', color: "#000"}}>
                        <Cart/>
                    </Link>
                    <Link to="/profile" style={{textDecoration: 'none', color: "#000"}}>
                        <Profile/>
                    </Link>
                </RightContnet>
            </HeaderWrappr>
            <Wrapper open={open}>
                <ModalWrapper>
                    <CancleButton onClick={onToggle}/>
                    <Menu2>
                    <Link to="/" style={{textDecoration: 'none', color: "#000"}}>
                        <MenuContent>HOME</MenuContent>    
                    </Link>
                    <Link to='/shop' style={{textDecoration: 'none', color: "#000"}}>
                        <MenuContent>SHOP</MenuContent>
                    </Link>
                    <Link to="/about" style={{textDecoration: 'none', color: "#000"}}>
                        <MenuContent>ABOUT</MenuContent>    
                    </Link>
                    
                    <Link to="/notice" style={{textDecoration: 'none', color: "#000"}}>
                        <MenuContent>NOTICE</MenuContent>        
                    </Link>
                    
                    <Link to="contact" style={{textDecoration: 'none', color: "#000"}}>
                        <MenuContent>CONTACT</MenuContent>
                    </Link>
                    </Menu2>
                </ModalWrapper>
                <ModalOpacity onClick={onToggle}/>
            </Wrapper>
        </>
    )
}

export default Home;
