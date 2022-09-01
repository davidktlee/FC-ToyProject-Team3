import styled from 'styled-components'
import backImg from '../../../../public/backImg3.png'

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
  background-image: url('${backImg}');
  background-size: cover;
  border-radius: 10px;
  margin: 5%;
  padding: 15%;
  margin-bottom: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ErrorMessage = styled.div`
  font-size: 12px;
  border-radius: 5px;
  padding: 1%;
  margin: 3%;
  background-color: #f3f4fc;
  color: #fe2e2e;
`

export const OkMessage = styled.div`
  font-size: 12px;
  border-radius: 5px;
  padding: 1%;
  margin: 3%;
  background-color: #f3f4fc;
  color: #04b630;
`

export const Name = styled.input.attrs({
  type: 'text',
  placeholder: '이름',
})`
  width: 250px;
  font-weight: bold;
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
  placeholder: '비밀번호 (8~16자리)',
  maxLength: '16',
})`
  width: 250px;
  font-weight: bold;
`
export const Select = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Age = styled.select`
  width: 100px;
  height: 28px;
  font-weight: bold;
`
export const Job = styled.select`
  width: 100px;
  height: 28px;
  font-weight: bold;
`
export const SelectMessage = styled.div`
  width: 105%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
