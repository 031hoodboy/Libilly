import React from 'react';
import Header from '../Componenet/Header';
import styled from 'styled-components';

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
    width: 100%;
    height: 5vh;
    font-size: 20px;
    padding: 0 1vw;
`;

const Password = styled(Id)`
    margin-top: 1vh;
`;

const LoginButton = styled.div`
    margin-top: 40px;
    outline: none;
    height: 5vh;
    font-size: 20px;
    padding: 0 1vw;
    width: 70%;
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

function Login () {
    return (
        <>
        <Header/>
        <Wrapper>
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