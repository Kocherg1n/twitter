import React, {ReactElement} from 'react';
import styled from 'styled-components';

interface InputStyledProps {

}

interface InputProps {
    label: string
    type?: string
    name: string
}

const SInput = styled.div<InputStyledProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const SLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
`

const SInputField = styled.input`
  border: 1px solid #ced6e0;
  border-radius: 5px;
  background: #fff;
  padding: 8px 10px;
  outline: none;
`

const Input: React.FC<InputProps> = (
    {
        label,
        type = 'text',
        name
    }): ReactElement => {
    return (
        <SInput>
            <SLabel>{label}</SLabel>
            <SInputField type={type} name={name}/>
        </SInput>
    );
};

export default Input;
