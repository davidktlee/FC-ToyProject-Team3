import React from 'react'
import CartUser from '../../components/cart/cartUser/CartUser'
import CartItem from '../../components/cart/cartItem/CartItem'

function ViewCart() {
  return (
    <>
      <CartUser />
      <CartItem />
      <CartItem />
      <CartItem />
    </>
  )
}

export default ViewCart