import React from 'react'
import * as S from './SigninStyle'
import Button from 'react-bootstrap/Button'
import Header from '../../../common/herder/Herder'

function Signin() {
  return (
    <S.Container>
      <Header />
      <S.Title>KFB-금융 대출 로그인</S.Title>
      <S.InputArea>
        <S.Email />
        <S.Password />
      </S.InputArea>
      <div class="d-grid gap-2 col-6 mx-auto">
        <Button variant="outline-primary" size="lg">
          로그인
        </Button>
      </div>
    </S.Container>
  )
}

export default Signin
