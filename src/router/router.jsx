import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartUser from '../components/cart/cartUser/CartUser'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ViewUserArea />} />
    </Routes>
  )
}

export default Router
