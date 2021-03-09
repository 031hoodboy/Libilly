import React from 'react';
import Header from '../Componenet/HomeHeader';
import styled from 'styled-components';
import LogoImg from '../images/logo.png';

const Wrapper = styled.div`
    margin: 0 auto;
    height: 100vh;
    width: 85vw;
    align-items: center;
    justify-content:center;
    display: flex;
    flex-direction: column;
`;

const Id = styled.input`
    outline: none;
    width: 80%;
    height: 5vh;
    font-size: 20px;
    padding: 0 1vw;
`;

const Password = styled(Id)`
    margin-top: 1vh;
`;

const LoginButton = styled.div`
    margin-top: 60px;
    outline: none;
    height: 5vh;
    font-size: 20px;
    padding: 0 1vw;
    width: 60%;
    background: #000;
    border-radius: 3px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: crosshair;
    &:hover{
        opacity: 0.85;
    }
`;

const JoinButton =styled(LoginButton)`
    margin-top: 1vh;
`;

const Logo = styled.div`
    width: 45vw;
    height: 200px;
    background-image: url(${LogoImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;    
    margin: 10vh 0;
`;

function Login () {
    return (
        <>
        <Header/>
        <Wrapper>
            <Logo/>
            <Id placeholder="아이디" />
            <Password placeholder="비밀번호" />
            <LoginButton>
                로그인
            </LoginButton>
            <JoinButton>
                회원가입
            </JoinButton>
        </Wrapper>
        </>
    )
}

export default Login;