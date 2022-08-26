import styled from 'styled-components'
import logo from '../../../../public/Logo.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h1`
  margin-top: 15%;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`
export const LogoImg = styled.img.attrs({
  src: `${logo}`,
})`
  width: 200px;
  height: 200px;
`

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #9dcaff;
  border-radius: 10px;
  margin: 5%;
  padding: 10%;
  margin-bottom: 20%;
`

export const Email = styled.input.attrs({
  type: 'email',
  placeholder: '이메일',
})`
  width: 250px;
  font-size: 22px;
  font-weight: bold;
`

export const Password = styled.input.attrs({
  type: 'password',
  placeholder: '비밀번호',
})`
  width: 250px;
  margin-top: 20%;
  font-size: 22px;
  font-weight: bold;
`
