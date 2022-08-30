import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    width:100vw;
    height:825px;
    padding: 0;
    margin: 0;
    font-family: 'Wooridaum';
    font-size:16px;
    display: flex;
    justify-content: center;
  }
  h1 {
    font-size:30px;
  }
  h2 {
    font-size: 24px;
  }
  button {
    
  }
  #root {
    width: 425px;
    height: 100%;
    border: 1px solid black;
  }
`

export default GlobalStyle
