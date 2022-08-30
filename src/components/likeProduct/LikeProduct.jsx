import React from 'react';
import * as S from './LikeProductStyle';
import ProductItem from '../../common/productItem/ProductItem';
function LikeProduct() {
  return (
    <>
    <S.InterestedItems>
      OOO회원님의 관심 상품
    </S.InterestedItems>
    <ProductItem/>
    </>
  )
}

export default LikeProduct