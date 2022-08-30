import React from 'react'
import * as S from './CartHeaderStyle'
import { useNavigate } from 'react-router-dom'

function CartHeader() {
  const navigate = useNavigate()

  return (
    <S.Header>
      <S.Container>
        <S.Flex>
          <S.Img src="https://cdn.sisamagazine.co.kr/news/photo/202109/401832_401982_133.png" alt="" />
          <S.LoginTextContainer>
            <S.Login
              onClick={() => {
                navigate('/')
              }}
            >
              장바구니
            </S.Login>
            <S.Login
              onClick={() => {
                navigate('/')
              }}
            >
              로그아웃
            </S.Login>
          </S.LoginTextContainer>
        </S.Flex>
      </S.Container>
    </S.Header>
  )
}

export default CartHeader
