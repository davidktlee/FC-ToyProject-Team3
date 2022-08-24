import { useState } from 'react'
import styled from 'styled-components'
import ProductList from './components/Product/ProductList'

function App() {
  const Fonts = styled.p`
    font-family: 'Wooridaum';
  `
  return (
    <div className="App">
      <ProductList />

      <Fonts>안녕하세요</Fonts>
      <div>안녕하세요</div>
    </div>
  )
}

export default App
