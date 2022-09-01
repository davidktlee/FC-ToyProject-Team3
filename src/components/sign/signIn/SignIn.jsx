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

  const onKeyPress = e => {
    if (e.key == 'Enter') {
      submitSignIn()
    }
  }

  const submitSignIn = async () => {
    if (userInput.email.trim() == '') {
      alert('이메일을 입력해주세요')
    } else if (userInput.password.trim() == '') {
      alert('비밀번호를 입력해주세요')
    } else {
      const response = await signIn({
        data: userInput,
      })
      if (response.data) {
        setCookie('accessToken', response.data['accessToken'], { path: '/' })
        navigate('/')
      } else {
        alert('이메일 또는 비밀번호를 확인해주세요!')
      }
    }
  }
  return (
    <S.Container>
      <S.Title>KFB-금융 대출 로그인</S.Title>
      <S.InputArea>
        <S.Email name="email" onChange={inputChangeHandler} onKeyPress={onKeyPress} />
        <S.Password name="password" onChange={inputChangeHandler} onKeyPress={onKeyPress} />
      </S.InputArea>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Button variant="outline-primary" size="lg" onClick={submitSignIn}>
          로그인
        </Button>
      </div>
    </S.Container>
  )
}

export default Signin
