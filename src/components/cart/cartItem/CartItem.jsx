import React, { useState } from 'react'
import * as S from './CartItemStyle'
import { BsCartX } from 'react-icons/all'
import {useGetCartQuery} from '../../../api/useApi'
import { Cookies } from 'react-cookie'


function CartItem() {
  const cookies = new Cookies()
  const token = cookies.get('accessToken')

  const {data: carts} = useGetCartQuery(token);
 

  return (
    <>
      {carts && carts.map((cart) => (
        <>
          <S.Container>
            <S.Logo>
              <S.Img src={cart.logo}/>
            </S.Logo>
            <S.ProductInfo>
              <div>{cart.name}</div>
              <div>{cart.loan} 원</div>
            </S.ProductInfo>
            <S.Cancel>
              <BsCartX />
            </S.Cancel>
          </S.Container>
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
