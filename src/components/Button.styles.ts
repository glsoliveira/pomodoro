import styled, { css } from 'styled-components'

export type ButtonVariante = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
    variante: ButtonVariante;
}

const buttonVariantes = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    ${props => {
        return css`
        background-color: ${buttonVariantes[props.variante]}`
    }}
`