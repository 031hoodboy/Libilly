import React from 'react';
import styled from 'styled-components';
import Header from '../Componenet/Header';

const MypageWrapper = styled.div`
    width: 90vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: #8a8a8a;
    margin:0 auto;
`;

const RightNav = styled.div`
    display: inline-block;
    display: flex;
    flex-direction: column;

`;

const NavContent = styled.span`
    padding: 10px 20px;
    display: inline-block;
    cursor: pointer;
    &:hover{
        border-bottom: 1px solid #8a8a8a;
    }
`;

const MainContent = styled.div`
    padding-top: 200px;
    display: flex;
`;

const Customer = styled.div`
    margin: 10px 20px;
    width: 70vw;
    height: 200px;
    background: #f3f3f3;
    border-radius: 19px;
    display: flex;
    align-items: center;
`;

const Profile = styled.div`
    cursor: pointer;
    border-radius: 50%;
    background: lightblue;
    height: 100px;
    width: 100px;
    margin: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
`;

const ProfileContent = styled.div`

`;

const Name = styled.div`
    font-size: 25px;
    color: #000;
    margin-bottom: 10px;
`;

const Pay = styled.div`
    color: #000;
`;

function Mypage() {
    return (
        <>
            <Header/>
            <MypageWrapper>

            <MainContent>
                <RightNav>
                    <NavContent>주문조회</NavContent>
                    <NavContent>위시리스트</NavContent>
                    <NavContent>취소/교환/반풀</NavContent>
                    <NavContent>쿠폰</NavContent>
                    <NavContent>1:1 문의</NavContent>
                    <NavContent>정보 수정</NavContent>
                    <NavContent>회원탈퇴</NavContent>
                </RightNav>
                <Customer>
                    <Profile>
                        HB
                    </Profile>
                    <ProfileContent>
                        <Name>박중현님 안녕하세요</Name>
                        <Pay>누적 구매금액 0원</Pay>
                    </ProfileContent>
                </Customer>
            </MainContent>
            </MypageWrapper>
        </>
    )
}

export default Mypage;