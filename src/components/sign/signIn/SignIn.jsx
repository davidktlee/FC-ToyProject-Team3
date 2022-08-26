import React from 'react'
import * as S from './SigninStyle'
import Button from 'react-bootstrap/Button'
import Header from '../../../common/herder/Herder'

function Signin() {
  return (
    <S.Container>
      <Header />
      <S.Title>K-금융 대출 로그인</S.Title>
      <S.InputArea>
        <S.Email />
        <S.Password />
      </S.InputArea>
      <Button variant="outline-primary">로그인</Button>
    </S.Container>
  )
}

export default Signin
