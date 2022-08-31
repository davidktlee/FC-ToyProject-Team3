import React, { useState } from 'react';
import * as S from './LikeProductStyle';
import { useWishListQuery } from '../../api/useApi';
import ProductItem from '../../common/productItem/ProductItem';
import { useCookies } from 'react-cookie';

function LikeProduct(props) {
  const { data: whihList, isLoadding,isError} = useWishListQuery()
  const [list, setList] = useState(whihList)
  const [cookies, setCookie, removeCookie] = useCookies()

  console.log(whihList)

  return (
    <>
         {cookies.accessToken ? (
          <S.InterestedItems>
            OOO회원님의 관심 상품
          </S.InterestedItems>
         ) : null
        }
    </>
  )
}

export default LikeProduct

