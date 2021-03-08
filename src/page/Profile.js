import React from 'react';
import styled from 'styled-components';
import Header from '../Componenet/Header';
import Content from '../HomeComponent/Content';

const CenterAligne = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;


function Profile() {
    return (
        <>
            <CenterAligne>
                <Header></Header>
            </CenterAligne>
        </>
    )
}

export default Profile;
