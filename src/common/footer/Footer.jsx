import React from 'react'
import * as S from './FooterStyle'
import { useNavigate } from 'react-router-dom'

function Footer() {

  const navigate = useNavigate()

  return (
    <S.Footer>
      <S.Anchor onClick={() => {navigate('/')}}>메인화면</S.Anchor>
      <S.Anchor onClick={() => {navigate('/')}}>금융상품</S.Anchor>
      <S.Anchor onClick={() => {navigate('/')}}>관심상품</S.Anchor>
    </S.Footer>
  )
}

export default Footer