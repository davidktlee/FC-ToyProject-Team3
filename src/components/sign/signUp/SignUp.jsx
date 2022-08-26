import React from 'react'
import * as S from './SignUpStyle'
import Button from 'react-bootstrap/Button'

function SignUp() {
  return (
    <S.Container>
      <S.Title>K-금융 대출 로그인</S.Title>
      <S.LogoImg />
      <S.InputArea>
        <S.Name />
        <S.Email />
        <S.Password />
        <S.Select>
          <S.Age>
            <option value="">나이</option>
            <option value="20">20대</option>
            <option value="30">30대</option>
            <option value="40">40대</option>
            <option value="50">50대</option>
            <option value="60">60대</option>
            <option value="70">70대</option>
            <option value="80">80대</option>
          </S.Age>
          <S.Job>
            <option value="">직업</option>
            <option value="군인">군인</option>
            <option value="공무원">공무원</option>
            <option value="직장인">직장인</option>
            <option value="사업가">사업가</option>
            <option value="학생">학생</option>
            <option value="주부">주부</option>
            <option value="무직">무직</option>
          </S.Job>
        </S.Select>
      </S.InputArea>
      <Button variant="outline-primary">회원가입</Button>
    </S.Container>
  )
}

export default SignUp
