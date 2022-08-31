import React, { useEffect, useState } from 'react';
import * as S from './ProductItemStyle';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import { useWishListAddMutation } from '../../api/useApi';
import { useCookies } from 'react-cookie';

function ProductItem({ name, loan, logo, productId }) {
  const [cookies, setCookie, removeCookie] = useCookies()
  // const { data: product, isLoding, isError } = useWishListAddMutation();
  const [postLikeProduct, setPostLikeProduct] = useState({data: { name, loan, logo, productId }})
  const [likeProduct] = useWishListAddMutation()
  
  const [commaLoan, setCommaLoan] = useState()
  const [starState, setStarState] = useState(false)
  const onClickStar = () => {
    setStarState(prev => !prev)
  }

  const toComma = () => {
    const commaLoan = loan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    setCommaLoan(commaLoan)
  }
  useEffect(() => {
    toComma()
  }, [loan])
  return (
    <S.Container>
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
    </S.Container>
  )
}

export default ProductItem
