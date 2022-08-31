import React from 'react'
import * as S from './FooterStyle'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()

  return (
    <S.Footer>
      <S.Anchor to="/">메인화면</S.Anchor>
      <S.Anchor to="/allproductlist">맞춤상품</S.Anchor>
      <S.Anchor to="/likeproduct">관심상품</S.Anchor>
    </S.Footer>
  )
}

export default Footer
