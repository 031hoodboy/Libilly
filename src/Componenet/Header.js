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
    width: 100vw;
    display: none;
    justify-content: space-between;
    ${props => props.open && css`
        display:flex;
    `}
    position: fixed;
    z-index: 2;
    top: 0;
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
    left: 0px;
  }
  100% {
    left: -200px;
  }
`;

const Appear = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;

const ModalWrapper = styled.div`
    width: 200px;
    height: 100vh;
    background-color: #fff;
    z-index: 3;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    animation: ${Fadein} 500ms ;
    ${props => props.open && css`
        display:flex;
        animation: ${Fadeout} 2s;
    `}
`;



const ModalOpacity = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: absolute;
    top: 0;
    opacity: 0.1;
    z-index: 2;
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

const ProfileModal = styled.div`
    width: 300px;
    height: 200px;
    background: #000;
    position: absolute;
    right: 20px;
    top: 60px;
    border-radius: 10px;
    background: #ffffff;
    border: 2px solid #f5f5f5;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    bottom: 0;
    /*box-shadow:  10px 10px 13px #ededed,
             -10px -10px 13px #ffffff; */
    display: none;
    ${props => props.open && css`
        display:flex;
    `}
    animation: ${Appear} 0.3s;
    z-index: 1;
`;

const ModalProfileImg = styled.div`
    width: 100px;
    height: 100px;
    cursor: pointer;
    background-image: url(${ProfileImg});
    background: cover;
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center center;
    
`;

const MyPage = styled.div`
    padding: 30px 20px;
    margin: 0 auto;
    cursor: pointer;
`;

const LogIn = styled.div`
    padding: 30px 20px;
    margin: 0 auto;
    cursor: pointer;
`;

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    bottom: 0;
    
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

function Header() {
    const [open, setOpen] = useState(false);
    const onToggle = () => {
        setOpen(!open)
    }

    const [profileOpen, setProfileOpen] = useState(false);
    const onProfile = () => {
        setProfileOpen(!profileOpen)
    }
    
    /*                    
    <Link to="/profile" style={{textDecoration: 'none', color: "#000"}}>
    <Profile/>
    </Link> */
    return (
        <>
            <HeaderWrappr>
                <Menu onClick={onToggle} />
                <Link to="/" style={{textDecoration: 'none', color: "#000"}}>
                    <LibillyHome/>
                </Link>

                <RightContnet>
                    <Link to="/cart" style={{textDecoration: 'none', color: "#000"}}>
                        <Cart/>
                    </Link>
                        <Profile onClick={onProfile}/>
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
            <ProfileModal open={profileOpen}>
                <ModalProfileImg/>

                <ButtonWrapper>
                    <Link to="/mypage" style={{textDecoration: "none", color: "#000"}}>
                        <MyPage>
                            마이페이지
                        </MyPage>
                    </Link>
                    <Link to="/login" style={{textDecoration: "none", color: "#000"}}>
                        <LogIn>
                            로그인
                        </LogIn>
                    </Link>
                </ButtonWrapper>

            </ProfileModal>

        </>
    )
}

export default Header;
