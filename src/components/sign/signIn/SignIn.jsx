import React, { useState } from 'react'
import * as S from './SigninStyle'
import Button from 'react-bootstrap/Button'
import { useSignInMutation } from '../../../api/useApi'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function Signin() {
  const [userInput, setUserInput] = useState({ email: '', password: '' })
  const [signIn] = useSignInMutation()
  const [cookies, setCookie, removeCookie] = useCookies()
  const navigate = useNavigate()

  const inputChangeHandler = e => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  const submitSignIn = async () => {
    try {
      const response = await signIn({
        data: userInput,
      })
      setCookie('accessToken', response.data['accessToken'], { path: '/' })
      navigate('/')
    } catch (e) {
      console.log(e)
    }
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
