import React, {useState} from 'react';
import styled, {css, keyframes} from 'styled-components';
import Cancle from '../images/cancle.png';

const Wrapper = styled.div`
    display: flex;
    width: 100vh;
    display: none;
    justify-content: space-between;
    ${props => props.open && css`
        display:flex;
    `}
`;
 
const ModalWrapper = styled.div`
    width: 20vw;
    height: 100vh;
    background-color: #fff;
    z-index: 1;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;

`;

const ModalOpacity = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #e0e0e0;
    position: absolute;
    top: 0;
    opacity: 0.3;
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
        color: #666;
    }
`;

const Menu = styled.div`
    height:90vh;
    position: absolute;
    top: 70px;
    justify-content: center;
    width: 200px;
`;

const MenuContent = styled.div`
    margin-top: 20px;
    font-size: 23px;
    &:hover{
        color: #666;
    }
`;

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const StyledWrapper = styled.div`
  width: 100px;
  height: 100px;
  background: #00bfb2;
  ${(props) => props.active &&`
   animation: ${boxFade} 2s 1s infinite linear alternate;
  `}
`;


function Modal () {
    const [open, setOpen] = useState(false);
    const onToggle = () => {
        setOpen(!open)
    }
    return(
        <Wrapper open={open}>
            <StyledWrapper>
                <ModalWrapper>
                    <CancleButton onClick={onToggle}/>
                    <Menu>
                    <MenuContent>HOME</MenuContent>
                    <MenuContent>SHOP</MenuContent>
                    <MenuContent>ABOUT</MenuContent>
                    <MenuContent>NOTICE</MenuContent>
                    <MenuContent>CONTACT</MenuContent>
                    </Menu>
                </ModalWrapper>
            </StyledWrapper>
            <ModalOpacity/>
        </Wrapper>
    )
}

export default Modal