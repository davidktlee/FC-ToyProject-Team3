import React, { useState } from 'react'
import * as S from './CartItemStyle'
import { BsCartX } from 'react-icons/all'
import {useGetCartQuery, useCancelCartMutation} from '../../../api/useApi'
import { Cookies } from 'react-cookie'


function CartItem() {
  const cookies = new Cookies()
  const token = cookies.get('accessToken')

  const {data: carts} = useGetCartQuery(token)
  const [cancelCart] = useCancelCartMutation()
  
  return (
    <>
      <S.ScrollBar>
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
                <BsCartX onClick={() => cancelCart({token, productId: cart.productId})}/>
              </S.Cancel>
            </S.Container>
          </>
        ))}
      </S.ScrollBar>
    </>
  )
}

export default CartItem
