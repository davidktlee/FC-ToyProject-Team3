import React, { useState } from 'react'
import { BsCartX } from 'react-icons/all'
import {useGetCartQuery} from '../../../api/useApi'
import { Cookies } from 'react-cookie'


function CartItem() {
  const cookies = new Cookies()
  const token = cookies.get('accessToken')

  const {data: items} = useGetCartQuery(token);
 

  return (
    <>
      {items && items.map((item) => (
        <>
          <p>{item.name}</p>
        </>
      ))}
    </>

    // <S.Container>
    //   <S.Logo>
    //     <img src="" alt="" />
    //   </S.Logo>

    //   <S.ManualContainer>
    //     <div>은행명</div>
    //     <div>상품 금액</div>
    //   </S.ManualContainer>

    //   <S.CancelBtn onClick={cancelCart}>
    //     <BsCartX />
    //   </S.CancelBtn>
    // </S.Container>
  )
}

export default CartItem
