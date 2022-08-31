import React from 'react'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import * as S from './ViewMainStyle'

function ViewMain() {
  const location = useLocation()
  return (
    <>
      {location.pathname == '/signin' || location.pathname == '/signup' ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  )
}

export default ViewMain
