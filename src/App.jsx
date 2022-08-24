import { useState } from 'react'
<<<<<<< HEAD
import styled from 'styled-components'
import ProductList from './components/Product/ProductList'
=======
import ProductList from './components/Product/ProductList/ProductList'
>>>>>>> 4e24ba14e53aa7c7defffbd65405d9e2affe0d16

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
