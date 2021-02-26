import React, {ReactNode} from 'react';
import styled from 'styled-components'

interface ButtonStyledProps {
    outline?: boolean
    fullWidth?: boolean
    small?: boolean
    floatRight?: boolean
    floatLeft?: boolean
}

interface ButtonProps extends ButtonStyledProps {
    children?: ReactNode
    onClick: () => void
}

const SButton = styled.button<ButtonStyledProps>`
  padding: ${props => props.small ? '6px 18px' : '12px 38px'};
  float: ${props => props.floatRight && 'right'};
  float: ${props => props.floatLeft && 'left'};
  font-size: ${props => props.small ? '14px' : '16px'};
  max-width: ${props => props.fullWidth ? '100%' : '380px'};
  outline: none;
  border: 2px solid rgb(29, 161, 242);
  border-radius: 20px;
  font-weight: 800;
  cursor: pointer;
  transition: all .3s ease-in-out;
  
  &:active {
    transition: .2s;
    transform: translateY(-1px);
  }
  &:hover {
    background: ${props => props.outline ? 'rgba(29, 161, 242, 0.1)' : 'rgb(26, 145, 218)'};
  }

  background: ${props => props.outline ? '#fff' : 'rgb(29, 161, 242)'};
  color:${props => props.outline ? 'rgb(29, 161, 242)' : '#fff'};
`


const Button: React.FC<ButtonProps> = (
    {
        outline,
        children,
        fullWidth,
        small,
        floatRight,
        floatLeft,
        onClick
    }): React.ReactElement => {


    return (
        <SButton
            floatRight={floatRight}
            floatLeft={floatLeft}
            small={small}
            onClick={onClick}
            outline={outline}
            fullWidth={fullWidth}>{children}</SButton>
    );
};

export default Button
