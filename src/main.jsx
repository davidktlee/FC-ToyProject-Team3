import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './style/GlobalStyle'
import GlobalFonts from './style/fonts/fonts'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <GlobalFonts />
      <App />
    </Provider>
  </BrowserRouter>,
)
