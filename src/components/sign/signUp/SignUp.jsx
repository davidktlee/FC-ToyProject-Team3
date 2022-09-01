import React, { useState, useRef } from 'react'
import * as S from './SignUpStyle'
import Button from 'react-bootstrap/Button'
import { useSignUpMutation } from '../../../api/useApi'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const [userInput, setUserInput] = useState({ username: '', email: '', password: '', age: 0, job: '' })
  const inputRef = useRef([])
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const userInputHandler = e => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  const submitSignUp = async () => {
    if (userInput.username.trim() == '' || !nameExp.test(userInput.username)) {
      alert('이름을 입력해주세요!')
      inputRef.current[0].focus()
    } else if (userInput.email.trim() == '' || !emailExp.test(userInput.email)) {
      alert('이메일을 올바르게 입력해주세요!')
      inputRef.current[1].focus()
    } else if (userInput.password.trim() == '' || userInput.password.length < 8) {
      alert('비밀번호를 8~16자리로 입력해주세요!')
      inputRef.current[2].focus()
    } else if (userInput.age == '') {
      alert('나이를 선택해주세요!')
      inputRef.current[3].focus()
    } else if (userInput.job == '') {
      alert('직업을 선택해주세요!')
      inputRef.current[4].focus()
    } else {
      userInput.age = parseInt(userInput.age)
      const response = await signUp({
        data: userInput,
      })
      if (response.data) {
        alert('회원가입이 완료되었습니다!')
        navigate('/signin')
      } else {
        alert('이미 존재하는 이메일입니다!')
      }
    }
  }

  const nameExp = /^[가-힣]{2,4}$/
  const emailExp = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/

  return (
    <S.Container>
      <S.Title>KFB-금융 대출 회원가입</S.Title>
      <S.InputArea>
        <S.Name ref={el => (inputRef.current[0] = el)} name="username" onChange={userInputHandler} />
        {userInput.username.trim() == '' || !nameExp.test(userInput.username) ? (
          <S.ErrorMessage>이름을 입력 해주세요</S.ErrorMessage>
        ) : (
          <S.OkMessage>이름 입력 완료</S.OkMessage>
        )}
        <S.Email ref={el => (inputRef.current[1] = el)} name="email" onChange={userInputHandler} />
        {userInput.email.trim() == '' || !emailExp.test(userInput.email) ? (
          <S.ErrorMessage>이메일을 입력 해주세요</S.ErrorMessage>
        ) : (
          <S.OkMessage>이메일 입력 완료</S.OkMessage>
        )}
        <S.Password ref={el => (inputRef.current[2] = el)} name="password" onChange={userInputHandler} />
        {userInput.password.trim() == '' || userInput.password.length < 8 ? (
          <S.ErrorMessage>조건에 맞게 입력해주세요!</S.ErrorMessage>
        ) : (
          <S.OkMessage>비밀번호 입력 완료</S.OkMessage>
        )}
        <S.Select>
          <S.Age ref={el => (inputRef.current[3] = el)} name="age" onChange={userInputHandler}>
            <option value="">나이</option>
            <option value="20">20대</option>
            <option value="30">30대</option>
            <option value="40">40대</option>
            <option value="50">50대</option>
            <option value="60">60대</option>
            <option value="70">70대</option>
            <option value="80">80대</option>
          </S.Age>
          <S.Job ref={el => (inputRef.current[4] = el)} name="job" onChange={userInputHandler}>
            <option value="">직업</option>
            <option value="공무원">공무원</option>
            <option value="직장인">직장인</option>
            <option value="자영업">자영업</option>
            <option value="학생">학생</option>
            <option value="주부">주부</option>
            <option value="무직">무직</option>
          </S.Job>
        </S.Select>
        <S.SelectMessage>
          {userInput.age == '' ? (
            <S.ErrorMessage>나이를 선택해주세요!</S.ErrorMessage>
          ) : (
            <S.OkMessage>나이 선택 완료</S.OkMessage>
          )}
          {userInput.job == '' ? (
            <S.ErrorMessage>직업을 선택해주세요!</S.ErrorMessage>
          ) : (
            <S.OkMessage>직업 선택 완료</S.OkMessage>
          )}
        </S.SelectMessage>
      </S.InputArea>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Button variant="outline-primary" size="lg" onClick={submitSignUp}>
          회원가입
        </Button>
      </div>
    </S.Container>
  )
}

export default SignUp
