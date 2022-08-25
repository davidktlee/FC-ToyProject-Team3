import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @font-face {
    font-family: "Wooridaum";
    src: url('./WooridaumL.ttf') format('truetype'),
    url('./WooridaumL.woff') format('woff');
    font-weight: 300;
  }

  @font-face {
    font-family: "Wooridaum";
    src: url('./WooridaumR.ttf') format('truetype'),
    url('./WooridaumR.woff') format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: "Wooridaum";
    src: url('./WooridaumB.ttf') format('truetype'),
    url('./WooridaumB.woff') format('woff');
    font-weight: 600;
  }
`