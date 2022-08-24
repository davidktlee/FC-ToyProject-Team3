import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @font-face {
    font-family: "Wooridaum";
    src: url('./WooridaumL.ttf');
    font-weight: 300;
  }

  @font-face {
    font-family: "Wooridaum";
    src: url('./WooridaumR.ttf');
    font-weight: 500;
  }

  @font-face {
    font-family: "Wooridaum";
    src: url('./WooridaumB.ttf');
    font-weight: 600;
  }
`