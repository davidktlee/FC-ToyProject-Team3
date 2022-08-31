// import React from 'react';
// import  * as S from './ProductListStyle';
// import { useSignInMutation } from '../../api/useApi'

// function ProductList() {

//   const [signin] = useSignInMutation()
//   console.log(signin.data)

//   return (
//     <>
//     <S.InterestedItems>
//       OOO회원님의 관심 상품
//     </S.InterestedItems>
//     <S.Container>
//       <S.Logo>
//         <img src="" alt="" />
//       </S.Logo>
//       <S.ManualContainer>
//         <div>{signin}</div>
//         <div>상품 금액</div>
//       </S.ManualContainer>
//     </S.Container>
//     </>
//   )
import React, { useEffect, useState } from 'react'
import { useGetProductsQuery, useGetUserDataQuery, useGetUserProductsQuery } from '../../api/useApi'
import TotalAmount from '../../components/totalamount/TotalAmount'
import ProductItem from '../productItem/CanNotProductItem'
import * as S from './ProductListStyle'
import { Cookies } from 'react-cookie'
import { useNavigate } from 'react-router'
import Loader from '../loader/Loader'

function ProductList() {
  const cookies = new Cookies()
  const token = cookies.get('accessToken')
  const navigate = useNavigate()
  const { data: productsLists, isLoading: getProductsLoading, isError: getProductsError } = useGetProductsQuery()
  const [filteredData, setFilteredData] = useState(null)
  useEffect(() => {
    if (productsLists) {
      setFilteredData(productsLists.filter(list => list.productId % 100 === 0))
    }
  }, [productsLists])
  if (!token) {
    return (
      <>
        <S.LoginText>
          <S.LoginBtn onClick={() => navigate('/signin')}>로그인</S.LoginBtn> 후 더 많은 상품을 만나보세요!
        </S.LoginText>
        <S.ManualText>가입 후 이용 가능한 상품</S.ManualText>
        {getProductsLoading ? (
          <S.Loader>
            <Loader />
          </S.Loader>
        ) : null}
        {filteredData &&
          filteredData.map(list => (
            <div key={list.productId}>
              <ProductItem name={list.name} loan={list.loan} logo={list.logo} />
            </div>
          ))}
      </>
    )
  } else {
    const { data: userData, isLoading: getUserDataLoading, isError: getUserDataError } = useGetUserDataQuery(token)
    return (
      <>
        {getUserDataLoading ? (
          <S.Loader>
            <Loader />
          </S.Loader>
        ) : null}
        <S.User>{userData && <S.Username>{userData.username}</S.Username>} 회원님 안녕하세요</S.User>
        {userData && <TotalAmount loan={userData.availableLoan} />}
        <S.ManualText>전체 상품</S.ManualText>
        <S.ItemContainer>
          {getProductsLoading ? (
            <S.Loader>
              <Loader />
            </S.Loader>
          ) : null}
          {productsLists &&
            productsLists.map(list => (
              <div key={list.productId}>
                <ProductItem name={list.name} loan={list.loan} logo={list.logo} />
              </div>
            ))}
        </S.ItemContainer>
      </>
    )
  }
}
export default ProductList
