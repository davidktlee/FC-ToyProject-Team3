import React from 'react'
import * as S from './LikeProductStyle'
import ProductItem from '../../common/ProductItem/ProductItem'
import Footer from '../../common/footer/Footer'
import Herder from '../../common/herder/Herder'

function LikeProduct() {
  return (
    <>
    <Herder/>
    <S.InterestedItems>
      OOO회원님의 관심 상품
    </S.InterestedItems>
    <ProductItem/>
    <Footer />
    </>
  )
}

export default LikeProduct