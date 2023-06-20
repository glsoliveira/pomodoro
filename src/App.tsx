/* eslint-disable prettier/prettier */
import { ThemeProvider } from "styled-components";

import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variante="primary" />
      <Button variante="secondary" />
      <Button variante="danger" />
      <Button variante="success" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  );
}
