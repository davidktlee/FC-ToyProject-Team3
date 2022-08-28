import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartUser from './components/cart/cartUser/CartUser';
import CartItem from './components/cart/cartItem/CartItem';

function App() {
  return (
    <div className="App">
      <CartUser />
      <CartItem />
    </div>
  )
}

export default App
