import React, {useState} from 'react'
import styled from 'styled-components'
import {FaTwitter} from 'react-icons/fa'

import greetingBg from '../assets/img/greeting.png'
import {Button, Input, Modal} from '../components'

const phoneWidth = '567px'
const tabWidth = '768px'
const preTabWidth = '1024px'

const SingInWrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;

@media (max-width: ${preTabWidth}) {
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
  margin: 40px 40px;
  align-items: flex-start;
  flex: 1 1 45%;
  word-break: break-word;
  
  @media (max-width: ${phoneWidth}) {
  margin: 0 10px;
  }

  h1 {
  font-size: 5rem;
  font-weight: 800;
  margin-top: 40px;

  @media (max-width: ${tabWidth}) {
    font-size: 3rem;
  }
  
  @media (max-width: ${phoneWidth}) {
    font-size: 1.8rem;
  }
}

  h2 {
  margin-top: 40px;
  font-size: 2rem;
  font-weight: 800;
  
    @media (max-width: ${preTabWidth}) {
      font-size: 1.5rem;
    }
    
    @media (max-width: ${phoneWidth}) {
      font-size: 1.2rem;
    }
  }

`
const SingInLoginButtonsWrapp = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 40px;

@media (max-width: ${phoneWidth}) {
  width: 100%;
}

& > button:first-child {
margin-bottom: 1rem;
}
`

export const SignIn: React.FC = (): React.ReactElement => {
    const [modalIsVisible, setModalIsVisible] = useState<'signIn' | 'signUp' | null>(null)

    const handleCloseModal = (): void => {
        setModalIsVisible(null)
    }

    const handleSignInModal = (): void => {
        setModalIsVisible('signIn')
    }

    const handleSignUpModal = (): void => {
        setModalIsVisible('signUp')
    }

    return (
        <SingInWrapper>
            <SingInGreeting>
                <FaTwitter size={300} style={{fill: '#fff'}}/>
            </SingInGreeting>
            <SingInLogin>
                <FaTwitter size={40} style={{fill: 'rgba(29,161,242,1.00)'}}/>
                <h1>В курсе происходящего</h1>
                <h2>Присоединяйтесь к Твиттеру прямо сейчас!</h2>
                <SingInLoginButtonsWrapp>
                    <Button onClick={handleSignUpModal}>Зарегистрироваться</Button>
                    <Button onClick={handleSignInModal} outline>Войти</Button>
                </SingInLoginButtonsWrapp>
            </SingInLogin>


            <Modal
                title='Войти'
                visible={modalIsVisible === 'signIn'}
                onClose={handleCloseModal}>
                <form>
                    <Input label='Email' name='email'/>
                    <Input label='Пароль' name='password' type='password'/>
                    <Button
                        onClick={() => console.log('!')}
                        floatRight
                        small>Войти в Твиттер</Button>
                </form>
            </Modal>

            <Modal
                title='Регистрация'
                visible={modalIsVisible === 'signUp'}
                onClose={handleCloseModal}>
                <form>
                    <Input label='Имя' name='name'/>
                    <Input label='Email' name='email'/>
                    <Input label='Пароль' name='password' type='password'/>
                    <Button
                        onClick={() => console.log('!')}
                        floatRight
                        small>Зарегистрироваться</Button>
                </form>
            </Modal>
        </SingInWrapper>
    );
};
