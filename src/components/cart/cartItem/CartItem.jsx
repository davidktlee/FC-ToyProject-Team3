import React, { useState } from 'react'
import * as S from './CartItemStyle'
import { BsCartX } from 'react-icons/all'

function CartItem() {
  const cancelCart = () => {
    alert('장바구니에서 삭제되었습니다.');
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

      <S.CancelBtn onClick={cancelCart}>
        <BsCartX />
      </S.CancelBtn>
    </S.Container>
  )
}

export default CartItem
