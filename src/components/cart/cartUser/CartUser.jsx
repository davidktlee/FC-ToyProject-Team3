import React from 'react'
import * as S from './CartUserStyle'
import { Cookies } from 'react-cookie'
import {useGetUserDataQuery} from '../../../api/useApi'

function CartUser() {
  const cookies = new Cookies()
  const token = cookies.get('accessToken')
  const {data: userName} = useGetUserDataQuery(token);

  return (
    <>
      <S.CartUserInfo>
        {userName.username} 회원님의 <S.ColoredText>장바구니</S.ColoredText>
      </S.CartUserInfo>
    </>
  )
}

export default CartUser