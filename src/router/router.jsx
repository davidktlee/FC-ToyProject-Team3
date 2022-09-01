import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LikeProduct from '../components/likeProduct/LikeProduct'
import ViewMain from '../pages/main/ViewMain.jsx'
import AllProduceList from '../pages/viewUserProduct/UserProductList'
import ProductList from '../common/productlist/ProductList'
import SignIn from '../components/sign/signIn/SignIn'
import SignUp from '../components/sign/signUp/SignUp'
import ViewCart from '../pages/cart/ViewCart'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ViewMain />}>
        <Route path="/" element={<ProductList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/likeproduct" element={<LikeProduct />} />
        <Route path="/allproductlist" element={<AllProduceList />} />
        <Route path="/cart" element={<ViewCart />} />
      </Route>
    </Routes>
  )
}

export default Router
