import React, { useState } from 'react'
import * as S from './SigninStyle'
import Button from 'react-bootstrap/Button'

function Signin() {
  const [userInput, setUserInput] = useState({ email: '', password: '' })
  const inputChangeHandler = e => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  return (
    <S.Container>
      <S.Title>KFB-금융 대출 로그인</S.Title>
      <S.InputArea>
        <S.Email name="email" onChange={inputChangeHandler} />
        <S.Password name="password" onChange={inputChangeHandler} />
      </S.InputArea>
      <div class="d-grid gap-2 col-6 mx-auto">
        <Button variant="outline-primary" size="lg" onClick={() => signIn(userInput)}>
          로그인
        </Button>
      </div>
    </S.Container>
  )
}

export default Signin
