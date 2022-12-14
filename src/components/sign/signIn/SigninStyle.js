import styled from 'styled-components'
import backImg2 from '../../../../public/maxresdefault.jpg'

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
  width: 90%;
  height: 350px;
  background-image: url('${backImg2}');
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  margin: 5%;
  padding: 25%;
  margin-bottom: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Email = styled.input.attrs({
  type: 'email',
  placeholder: '이메일',
})`
  width: 250px;
  margin-top: -5%;
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
