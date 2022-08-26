import React from 'react'
import * as S from './HerderStyle'
import { AiFillShopping } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function Herder() {

  const navigate = useNavigate()

  return (
    <S.Herder>
      <S.Container>
        <S.Flex>
          <S.Img src="https://cdn.sisamagazine.co.kr/news/photo/202109/401832_401982_133.png" alt="" />
          <S.LoginTextContainer>
            <S.Login onClick={() => {navigate('/')}}>회원가입</S.Login>
            <S.Login onClick={() => {navigate('/')}}>로그인</S.Login>
          </S.LoginTextContainer>
        </S.Flex>
      </S.Container>
    </S.Herder>
  )
}

export default Herder