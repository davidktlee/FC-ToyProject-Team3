import React, { useState } from 'react'
import * as S from './SignUpStyle'
import Button from 'react-bootstrap/Button'

function SignUp() {
  const [userInput, setUserInput] = useState({ username: '', email: '', password: '', age: '', job: '' })

  const userInputHandler = e => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
    console.log(e.target.value)
  }
  return (
    <S.Container>
      <S.Title>KFB-금융 대출 회원가입</S.Title>
      <S.InputArea>
        <S.Name name="username" onChange={userInputHandler} />
        <S.Email name="email" onChange={userInputHandler} />
        <S.Password name="password" onChange={userInputHandler} />
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
            <option value="주부·무직">주부·무직</option>
          </S.Job>
        </S.Select>
      </S.InputArea>
      <div class="d-grid gap-2 col-6 mx-auto">
        <Button variant="outline-primary" size="lg">
          회원가입
        </Button>
      </div>
    </S.Container>
  )
}

export default SignUp
