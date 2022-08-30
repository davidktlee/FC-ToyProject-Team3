import React from 'react';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import { Outlet } from 'react-router-dom';

function ViewMain() {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default ViewMain