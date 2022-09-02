import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './ProductItemStyle';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useWishListAddMutation, useWishListDeleteMutation, useAddCartMutation } from '../../api/useApi';
import Button from 'react-bootstrap/Button';
import { useCookies } from 'react-cookie';

function ProductItem({ name, loan, logo, productId }) {
  const location = useLocation()
  const [cookies] = useCookies()
  const token = cookies.accessToken
  const [commaLoan, setCommaLoan] = useState()
  const [starState, setStarState] = useState(false)
  const [starStates, setStarStates] = useState(true)
  const [hoverState, setHoverState] = useState(false)
  const [hoverStates, setHoverStates] = useState(false)
  const [postLikeProduct ] = useState({data: { name, loan, logo, productId }})
  const [likeProduct] = useWishListAddMutation()
  const [deleteLikeProduct] = useWishListDeleteMutation()
  const [addCart] = useAddCartMutation()
  

  const onClickStar = () => {
    setStarState(prev => !prev)
    setStarStates(prev=> !prev)
  }
  const changeHoverState = () => {
    setHoverState(prev => !prev)
    setHoverStates(prev => !prev)
  }
  const toComma = () => {
    const addComma = loan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    setCommaLoan(addComma)
  }

  useEffect(() => {
    toComma()
  }, [loan])
  return (
    <>
      {location.pathname === '/allproductlist' ? (
        <S.Container onMouseEnter={changeHoverState} onMouseLeave={changeHoverState}>
        <S.Logo>
          <S.Img src={logo} alt="bank-logo" />
        </S.Logo>
        <S.ManualContainer>
          <div>{name}</div>
          <div>{commaLoan} 원</div>
        </S.ManualContainer>
        <S.Star onClick={() => {
          onClickStar(),
          likeProduct({data: postLikeProduct, productId: productId, token: token})
        }}>{starState ? <AiFillStar /> : <AiOutlineStar />}</S.Star>
        {hoverState ? (
          <S.PurchaseBtn>
            <Button variant="outline-primary" size="sm" onClick={() => addCart({token, productId: productId})}>
              장바구니 담기
            </Button>{' '}
          </S.PurchaseBtn>
        ) : null}
      </S.Container>
      ) : (
        <>
          <S.Container onMouseEnter={changeHoverState} onMouseLeave={changeHoverState}>
            <S.Logo>
              <S.Img src={logo} alt="bank-logo" />
            </S.Logo>
            <S.ManualContainer>
              <div>{name}</div>
              <div>{commaLoan} 원</div>
            </S.ManualContainer>
            <S.Star onClick={() => {
              onClickStar()
              deleteLikeProduct({ productId: productId, token: token})
            }}> {starStates ? <AiFillStar /> : <AiOutlineStar />}
            </S.Star>
            {hoverStates ? (
              <S.PurchaseBtn>
                <Button variant="outline-primary" size="sm" onClick={() => addCart({token, productId: productId})}>
                  장바구니 담기
                </Button>{' '}
              </S.PurchaseBtn>
        ) : null}
          </S.Container>
        </>
      )}
    </>
  )
}

export default ProductItem
