import React, { useState } from 'react';
import * as S from './LikeProductStyle';
import { useWishListQuery, useGetUserDataQuery } from '../../api/useApi';
import ProductItem from '../../common/productItem/ProductItem';
import { useCookies } from 'react-cookie';


function LikeProduct() {
  const [cookies] = useCookies()
  const token = cookies.accessToken;
  const { data: whihList, isLoadding} = useWishListQuery(token)
  const {data : username} = useGetUserDataQuery(token)

  return (
    <>
      <S.User>{username && <S.Username>{username.username}</S.Username>} 회원님 관심상품</S.User>
      <S.ScrollBar>
        {whihList &&
          whihList.map((list) => {
            return(
              <div key={list.productId}>
              <ProductItem name={list.name} loan={list.loan} logo={list.logo} productId={list.productId}/>
              </div>
            )
          })
        }
      </S.ScrollBar>
    </>
  )
}

export default LikeProduct

