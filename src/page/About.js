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

const Span = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    
`;

const Logo = styled.div`
    width: 55vw;
    height: 200px;
    background-image: url(${LogoImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;    
    margin: 10vh 0;
`;

function About () {
    return (
        <>
        <Header/>
        <Wrapper>
            <Logo/>
            <Span>
                LIBILLY는 로컬 스트리트 문화를 기반으로 전개하는 브랜드입니다.
                <br />
                거리의 다양한 영감을 디자린 뿐만 아니라 사진과 영상등을 통해 표현합니다.
            </Span>
        </Wrapper>
        </>
    )
}

export default About;