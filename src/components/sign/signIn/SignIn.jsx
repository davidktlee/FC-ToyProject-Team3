import React from 'react'
import * as S from './SigninStyle'
import Button from 'react-bootstrap/Button'

function Signin() {
  return (
    <S.Container>
      <S.Title>K-금융 대출 로그인</S.Title>
      <S.LogoImg />
      <S.InputArea>
        <S.Email />
        <S.Password />
      </S.InputArea>
      <Button variant="outline-primary">로그인</Button>
    </S.Container>
  )
}

export default Signin
