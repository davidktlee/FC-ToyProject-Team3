import React, { useState } from 'react'
import * as S from './ProductItemStyle'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Button from 'react-bootstrap/Button'
function ProductItem() {
  const [starState, setStarState] = useState(false)
  const onClickStar = () => {
    setStarState(prev => !prev)
  }
  return (
    <S.Container>
      <S.Logo>
        <img src="" alt="" />
      </S.Logo>
      <S.ManualContainer>
        <div>은행명</div>
        <div>상품 금액</div>
      </S.ManualContainer>
      <S.Star onClick={onClickStar}>{starState ? <AiFillStar /> : <AiOutlineStar />}</S.Star>
    </S.Container>
  )
}

export default ProductItem
