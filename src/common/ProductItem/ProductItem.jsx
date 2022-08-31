import React, { useEffect, useState } from 'react';
import * as S from './ProductItemStyle';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useWishListAddMutation } from '../../api/useApi';
import Button from 'react-bootstrap/Button';

function ProductItem({ name, loan, logo, productId }) {
  const [commaLoan, setCommaLoan] = useState()
  const [starState, setStarState] = useState(false)
  const [hoverState, setHoverState] = useState(false)
  const [postLikeProduct, setPostLikeProduct] = useState({data: { name, loan, logo, productId }})
  const [likeProduct] = useWishListAddMutation()
  const onClickStar = () => {
    setStarState(prev => !prev)
  }
  const changeHoverState = () => {
    setHoverState(prev => !prev)
  }
  const toComma = () => {
    const addComma = loan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    setCommaLoan(addComma)
  }

  useEffect(() => {
    toComma()
  }, [loan])
  return (
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
        likeProduct({data: postLikeProduct, productId: productId})
        }}>
      {starState ? <AiFillStar /> : <AiOutlineStar />}
      </S.Star>
      {/* <S.Star onClick={onClickStar}>{starState ? <AiFillStar /> : <AiOutlineStar />}</S.Star>
      {hoverState ? (
        <S.PurchaseBtn>
          <Button variant="outline-primary" size="sm">
            장바구니 담기
          </Button>{' '}
        </S.PurchaseBtn>
      ) : null} */}
    </S.Container>
  )
}

export default ProductItem
