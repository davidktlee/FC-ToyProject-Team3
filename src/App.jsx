import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductList from './pages/viewAllProduct/ProductList'
import LikeProduct from './components/likeProduct/LikeProduct'

function App() {
  return (
    <div className="App">
      <LikeProduct />
    </div>
  )
}

export default App
