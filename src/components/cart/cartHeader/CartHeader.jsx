import React from 'react'
import * as S from './CartHeaderStyle'
import { useNavigate } from 'react-router-dom'

function CartHeader() {
  const navigate = useNavigate()

  return (
    <>
      <S.Container>
        <S.Inner>
          <S.Logo src="https://cdn.sisamagazine.co.kr/news/photo/202109/401832_401982_133.png" alt="" />
          <S.CartBtn />
        </S.Inner>
      </S.Container>
    </>
  )
}

export default CartHeader