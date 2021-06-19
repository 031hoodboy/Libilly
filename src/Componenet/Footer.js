import React from 'react';
import styled, {css} from 'styled-components';
import {Route,Link} from 'react-router-dom';

const FooterBlock = styled.div`
    width: 100vw;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    color: #888;
    flex-direction: column;
    @media screen and (max-width: 800px) {
        font-size: 0.5em;
    }

`;

const Span = styled.div`
    margin-left: 10px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

function Footer() {
    return (
        <FooterBlock>
            <Wrapper>
                <Span>COMPANY : 주식회사 리빌리</Span>
                <Span>CEO : 곽제원</Span>
            </Wrapper>

            <Wrapper>
                <Span>COMPANY_REGNO : [8088801696]</Span>
                <Span>NETWORK_REGNO 2020-와부조안-0267</Span>
                <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8088801696" style={{textDecoration: "none", color: "#888"}}><Span>[사업자정보확인]</Span></a> 
            </Wrapper>

            <Wrapper>
                <Span>TEL: 010-9830-3985</Span>
                <Span>ADD : 12274 경기도 남양주시 와부읍 덕소로 206 쌍용아파트 107동 1002호</Span>
                <Span>CPO: 주식회사리빌리(libilly_official@naver.com)</Span>
            </Wrapper>

            <Wrapper>
                <Span>Contact libilly_official@naver.com for more information.</Span>
            </Wrapper>

            <Wrapper>
                <Span>Bank info : 기업은행 05610903701013 : 주식회사리빌리</Span>
            </Wrapper>

            <Wrapper>
                <Span>CS center : 010-9830-3985</Span>
                <Span>AM10:00 ~ PM5:00 (점심시간 PM1:00~2:00) ( WEEKEND/HOLIDAY OFF )</Span>
            </Wrapper>
        </FooterBlock>
    );
}

export default Footer;