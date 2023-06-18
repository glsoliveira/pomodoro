// import styles from "./Button.module.css";
import { ButtonContainer, ButtonVariante } from "./Button.styles";

interface ButtonProps {
  variante?: ButtonVariante;
}

// export function Button({ color = "primary" }: ButtonProps) {
//   return <button className={`${styles.button} ${styles[color]}`}>teste</button>;
// }

export function Button({ variante = "primary" }: ButtonProps) {
  return <ButtonContainer variante={variante}>Send</ButtonContainer>;
}
