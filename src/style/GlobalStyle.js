import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    width:100%;
    height:850px;
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
    display: flex;
    justify-content: center;
    border: 1px solid black;
  }
  @media screen and (max-width: 768px) {
    #root {
    width: 100%;
    }
  }
`

export default GlobalStyle
