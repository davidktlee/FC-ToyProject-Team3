import React, { useState } from 'react'
import * as S from './SigninStyle'
import Button from 'react-bootstrap/Button'
import { useSignInMutation } from '../../../api/useApi'

function Signin() {
  const [userInput, setUserInput] = useState({ email: '', password: '' })
  const [signIn] = useSignInMutation()

  const inputChangeHandler = e => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  const submitSignIn = () => {
    signIn({
      data: userInput,
    })
  }
  return (
    <S.Container>
      <S.Title>KFB-금융 대출 로그인</S.Title>
      <S.InputArea>
        <S.Email name="email" onChange={inputChangeHandler} />
        <S.Password name="password" onChange={inputChangeHandler} />
      </S.InputArea>
      <div class="d-grid gap-2 col-6 mx-auto">
        <Button variant="outline-primary" size="lg" onClick={submitSignIn}>
          로그인
        </Button>
      </div>
    </S.Container>
  )
}

export default Signin
