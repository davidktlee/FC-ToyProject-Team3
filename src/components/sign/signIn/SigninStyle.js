import styled from 'styled-components'
import backImg2 from '../../../../public/backImg2.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h1`
  margin-top: 3%;
  margin-bottom: 5%;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`

export const InputArea = styled.div`
  width: 89%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('${backImg2}');
  background-size: cover;
  border-radius: 10px;
  margin: 5%;
  padding: 25%;
  margin-bottom: 20%;
`

export const Email = styled.input.attrs({
  type: 'email',
  placeholder: '이메일',
})`
  width: 250px;
  font-weight: bold;
`

export const Password = styled.input.attrs({
  type: 'password',
  placeholder: '비밀번호',
})`
  width: 250px;
  margin-top: 25%;
  font-weight: bold;
`
