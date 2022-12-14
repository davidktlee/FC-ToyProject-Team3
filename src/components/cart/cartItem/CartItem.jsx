import React, { useState } from 'react'
import * as S from './CartItemStyle'
import { BsCartX } from 'react-icons/all'
import { useGetCartQuery, useCancelCartMutation, useCancelAllCartMutation } from '../../../api/useApi'
import { Cookies } from 'react-cookie'
import Button from 'react-bootstrap/Button'

function CartItem() {
  const cookies = new Cookies()
  const token = cookies.get('accessToken')

  const { data: carts } = useGetCartQuery(token)
  const [cancelCart] = useCancelCartMutation()
  const [cancelAllCart] = useCancelAllCartMutation()

  return (
    <>
      <S.ScrollBar>
        <S.deleteBtnContainer>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => {
              cancelAllCart(token)
            }}
          >
            전체삭제
          </Button>
        </S.deleteBtnContainer>

        {carts &&
          carts.map(cart => (
            <>
              <S.Container>
                <S.Logo>
                  <S.Img src={cart.logo} />
                </S.Logo>
                <S.ProductInfo>
                  <div>{cart.name}</div>
                  <div>{cart.loan} 원</div>
                </S.ProductInfo>
                <S.Cancel>
                  <BsCartX onClick={() => cancelCart({ token, productId: cart.productId })} />
                </S.Cancel>
              </S.Container>
            </>
          ))}
      </S.ScrollBar>
    </>
  )
}

export default CartItem
