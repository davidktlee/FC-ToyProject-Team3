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
      <S.User>
        {userName && <S.Username>{userName.username}</S.Username>} 
        회원님 장바구니
      </S.User>
    </>
  )
}

export default CartUser