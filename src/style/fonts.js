import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @font-face {
    font-family: "Wooridaum";
    src: url('/fonts/WooridaumL.ttf') format('truetype'),
    url('/fonts/WooridaumL.woff') format('woff');
    font-weight: 300;
  }

  @font-face {
    font-family: "Wooridaum";
    src: url('/fonts/WooridaumR.ttf') format('truetype'),
    url('/fonts/WooridaumR.woff') format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: "Wooridaum";
    src: url('/fonts/WooridaumB.ttf') format('truetype'),
    url('/fonts/WooridaumB.woff') format('woff');
    font-weight: 600;
  }
`
