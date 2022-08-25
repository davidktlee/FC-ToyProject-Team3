import { useState } from 'react'
import ProductList from './pages/viewAllProduct/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signin from './components/sign/signIn/SignIn'
import Signup from './components/sign/signUp/SignUp'

function App() {
  return (
    <div className="App">
      {/* <ProductList /> */}
      {/* <Signin /> */}
      <Signup />
    </div>
  )
}

export default App
