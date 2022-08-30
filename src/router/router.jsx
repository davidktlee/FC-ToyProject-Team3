import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LikeProduct from '../components/likeProduct/LikeProduct';
import ViewMain from '../pages/main/ViewMain.jsx';
import AllProduceList from '../pages/viewAllProduct/AllProductList';
import ProductList from '../common/prouctlist/ProductList';
function Router() {
  return (
    <Routes>
      <Route path="/" element={<ViewMain />} >
        <Route path='/' element={<ProductList/>}/>
        <Route path='/likeproduct' element={<LikeProduct/>} />
        <Route path='/allproductlist' element={<AllProduceList />} />
      </Route>
    </Routes>
  )
}

export default Router
