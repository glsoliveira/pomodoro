/* eslint-disable prettier/prettier */
// import styles from "./Button.module.css";
import { ButtonContainer, ButtonVariante } from "./Button.styles";

interface ButtonProps {
  variante?: ButtonVariante;
}

// export function Button({ color = "primary" }: ButtonProps) {
//   return <button className={`${styles.button} ${styles[color]}`}>teste</button>;
// }

// This function call the componente created by styled-component
export function Button({ variante = "primary" }: ButtonProps) {
  return <ButtonContainer variante={variante}>Send</ButtonContainer>;
}
