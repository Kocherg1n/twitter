import React, {ReactNode} from 'react'
import {FaTimes} from 'react-icons/fa'
import styled from 'styled-components'

interface ModalStyledProps {
    visible: boolean
}

interface ModalProps extends ModalStyledProps {
    title: string
    children: ReactNode
    onClose: () => void
}


const SModal = styled.div<ModalStyledProps>`
  z-index: 40;
  position: absolute;
  padding: 0 10px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.7);
  display: ${props => props.visible ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
`
const SModalContainer = styled.div`
  z-index: 50;
  border-radius: 10px;
  background: #fff;
  width: 100%;
  max-width: 440px;
  min-height: 200px;
`
const SModalHeader = styled.div`
  padding: 8px 10px;
  border-bottom: 1px solid #f1f2f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg {
  cursor: pointer;
  }
`
const SModalContent = styled.div`
  padding: 12px 10px 8px 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`


const Modal: React.FC<ModalProps> = (
    {
        title,
        visible = false,
        children,
        onClose
    }): React.ReactElement | null => {

    if (!visible) {
        return null
    }

    return (
        <SModal visible={visible}>
            <SModalContainer>
                <SModalHeader>
                    <h3>{title}</h3>
                    <FaTimes onClick={onClose}/>
                </SModalHeader>
                <SModalContent>
                    {children}
                </SModalContent>
            </SModalContainer>
        </SModal>
    );
};

export default Modal
