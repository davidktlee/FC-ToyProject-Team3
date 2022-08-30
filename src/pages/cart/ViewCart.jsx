import React from 'react'
import CartHeader from '../../components/cart/cartHeader/CartHeader'
import CartUser from '../../components/cart/cartUser/CartUser'
import CartItem from '../../components/cart/cartItem/CartItem'

function ViewCart() {
  return (
    <>
      <CartHeader />
      <CartUser />
      <CartItem />
    </>
  )
}

export default ViewCart