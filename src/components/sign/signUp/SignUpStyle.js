import styled from 'styled-components'
import logo from '../../../../public/Logo.png'
import backImg from '../../../../public/backImg.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LogoImg = styled.img.attrs({
  src: `${logo}`,
})`
  width: 200px;
  height: 200px;
`

export const Title = styled.h1`
  margin-top: 15%;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('${backImg}');
  background-size: cover;
  border-radius: 10px;
  margin: 5%;
  padding: 15%;
  margin-bottom: 20%;
`

export const Name = styled.input.attrs({
  type: 'text',
  placeholder: '이름',
})`
  width: 250px;
  font-size: 22px;
  font-weight: bold;
`

export const Email = styled.input.attrs({
  type: 'email',
  placeholder: '이메일',
})`
  width: 250px;
  margin-top: 7%;
  font-size: 22px;
  font-weight: bold;
`

export const Password = styled.input.attrs({
  type: 'password',
  placeholder: '비밀번호',
})`
  width: 250px;
  margin-top: 7%;
  font-size: 22px;
  font-weight: bold;
`
export const Select = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Age = styled.select`
  width: 100px;
  height: 35px;
  margin-top: 7%;
  font-size: 24px;
  font-weight: bold;
`
export const Job = styled.select`
  width: 100px;
  height: 35px;
  margin-top: 7%;
  font-size: 24px;
  font-weight: bold;
`
