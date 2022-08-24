import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './style/GlobalStyle'
import GlobalFonts from './style/fonts/fonts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalFonts />
    <App />
  </React.StrictMode>,
)
