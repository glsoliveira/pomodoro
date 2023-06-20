/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'

export type ButtonVariante = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variante: ButtonVariante
}

const buttonVariantes = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
    /* ${props => {
        return css`
        background-color: ${buttonVariantes[props.variante]}`
    }} */
`