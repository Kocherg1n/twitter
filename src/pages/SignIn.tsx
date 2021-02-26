import React from 'react'
import styled from 'styled-components'
import greetingBg from '../assets/img/greeting.png'
import {FaTwitter} from 'react-icons/fa';

const SingInWrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;

@media (max-width: 1024px) {
flex-direction: column-reverse;
}
`
const SingInGreeting = styled.section`
flex: 1 2 55%;
display: flex;
justify-content: center;
align-items: center;
background: center / cover no-repeat url(${greetingBg});
`
const SingInLogin = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 40px;
  align-items: flex-start;
  flex: 1 1 45%;
  word-break: break-word;

  h1 {
  font-size: 5rem;
  font-weight: 800;
  margin-top: 40px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 567px) {
    font-size: 1.8rem;
  }
}

  h2 {
  margin-top: 40px;
  font-size: 2rem;
  font-weight: 800;
  
    @media (max-width: 1024px) {
      font-size: 1.5rem;
    }
    
    @media (max-width: 567px) {
      font-size: 1.2rem;
    }
  }

`


export const SignIn = () => {
    // const [visibleModal, setVisibleModal] = React.useState<'singIn' | 'singUp'>()
    //
    // const handleClickSingIn = (): void => {
    //     setVisibleModal('singIn');
    // }
    //
    // const handleClickSingUp = (): void => {
    //     setVisibleModal('singUp');
    // }
    //
    // const handleClickClose = (): void => {
    //     setVisibleModal(undefined)
    // }

    return (
        <SingInWrapper>
            <SingInGreeting>
                <FaTwitter size={300} style={{fill: '#fff'}}/>
            </SingInGreeting>
            <SingInLogin>
                <FaTwitter size={40} style={{fill: 'rgba(29,161,242,1.00)'}}/>
                <h1>В курсе происходящего</h1>
                <h2>Присоединяйтесь к Твиттеру прямо сейчас!</h2>
            </SingInLogin>
        </SingInWrapper>
    );
};
