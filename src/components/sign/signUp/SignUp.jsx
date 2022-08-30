import React, { useState } from 'react'
import * as S from './SignUpStyle'
import Button from 'react-bootstrap/Button'
import { useSignUpMutation } from '../../../api/useApi'

function SignUp() {
  const [userInput, setUserInput] = useState({ username: '', email: '', password: '', age: 0, job: '' })
  const [signUp] = useSignUpMutation()

  const userInputHandler = e => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  const submitSignUp = async () => {
    if (userInput.username.trim() == '' || !nameExp.test(userInput.username)) {
      alert('이름을 입력해주세요!')
    } else if (userInput.email.trim() == '' || !emailExp.test(userInput.email)) {
      alert('이메일을 올바르게 입력해주세요!')
    } else if (userInput.password.trim() == '' || userInput.password.length < 8) {
      alert('비밀번호를 8~16자리로 입력해주세요!')
    } else if (userInput.age == '') {
      alert('나이를 선택해주세요!')
    } else if (userInput.job == '') {
      alert('직업을 선택해주세요!')
    } else {
      try {
        userInput.age = parseInt(userInput.age)
        await signUp({
          data: userInput,
        })
      } catch (e) {
        console.log(e)
      }
      // if (!error.status) {
      // alert('회원가입이 완료되었습니다!')
      // } else {
      // alert('이미 존재하는 이메일입니다!')
      // }
    }
  }

  const nameExp = /^[가-힣]{2,4}$/
  const emailExp = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/

  return (
    <S.Container>
      <S.Title>KFB-금융 대출 회원가입</S.Title>
      <S.InputArea>
        <S.Name name="username" onChange={userInputHandler} />
        {userInput.username.trim() == '' || !nameExp.test(userInput.username) ? (
          <S.ErrorMessage>이름을 입력 해주세요</S.ErrorMessage>
        ) : (
          <S.OkMessage>이름 입력 완료</S.OkMessage>
        )}
        <S.Email name="email" onChange={userInputHandler} />
        {userInput.email.trim() == '' || !emailExp.test(userInput.email) ? (
          <S.ErrorMessage>이메일을 입력 해주세요</S.ErrorMessage>
        ) : (
          <S.OkMessage>이메일 입력 완료</S.OkMessage>
        )}
        <S.Password name="password" onChange={userInputHandler} />
        {userInput.password.trim() == '' || userInput.password.length < 8 ? (
          <S.ErrorMessage>조건에 맞게 입력해주세요!</S.ErrorMessage>
        ) : (
          <S.OkMessage>비밀번호 입력 완료</S.OkMessage>
        )}
        <S.Select>
          <S.Age name="age" onChange={userInputHandler}>
            <option value="">나이</option>
            <option value="20">20대</option>
            <option value="30">30대</option>
            <option value="40">40대</option>
            <option value="50">50대</option>
            <option value="60">60대</option>
            <option value="70">70대</option>
            <option value="80">80대</option>
          </S.Age>
          <S.Job name="job" onChange={userInputHandler}>
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
      <div class="d-grid gap-2 col-6 mx-auto">
        <Button variant="outline-primary" size="lg" onClick={submitSignUp}>
          회원가입
        </Button>
      </div>
    </S.Container>
  )
}

export default SignUp
