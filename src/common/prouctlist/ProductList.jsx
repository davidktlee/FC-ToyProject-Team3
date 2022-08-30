import React from 'react';
import  * as S from './ProductListStyle';
import { useSignInMutation } from '../../api/useApi'

function ProductList() {

  const [signin] = useSignInMutation()
  console.log(signin.data)

  return (
    <>
    <S.InterestedItems>
      OOO회원님의 관심 상품
    </S.InterestedItems>
    <S.Container>
      <S.Logo>
        <img src="" alt="" />
      </S.Logo>
      <S.ManualContainer>
        <div>{signin}</div>
        <div>상품 금액</div>
      </S.ManualContainer>
    </S.Container>
    </>
  )
}

export default ProductList