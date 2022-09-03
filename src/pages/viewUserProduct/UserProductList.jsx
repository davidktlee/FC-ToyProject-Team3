import React, { useState } from 'react'
import * as S from './UserProductListStyle'
import { BiSearchAlt } from 'react-icons/bi'
import ProductItem from '../../common/ProductItem/ProductItem'
import { useEffect } from 'react'
import { useGetSearchProductsMutation, useGetUserProductsQuery } from '../../api/useApi'
import { useCookies } from 'react-cookie'
import Loader from '../../common/loader/Loader'

function AllProductList() {
  const [cookies] = useCookies()
  const token = cookies.accessToken

  const {
    data: getProductLists,
    isLoading: getProductLoading,
    isError: getProductError,
  } = useGetUserProductsQuery(token)
  const [getSearchProducts] = useGetSearchProductsMutation()

  const [searchValue, setSearchValue] = useState({
    type: '',
    keyword: '',
    token,
  })
  const [sortOptionValue, setSortOptionValue] = useState('')
  const [gotProductLists, setGotProductLists] = useState()
  const [optionError, setOptionError] = useState(false)

  const changeValueHandler = e => {
    const { name, value } = e.target
    if (searchValue.type === '금액별') {
      setSearchValue({ ...searchValue, [name]: Number(value) })
    } else {
      setSearchValue({ ...searchValue, [name]: value })
    }
    if (searchValue.option) {
      setOptionError(false)
    }
  }

  const changeSortOptionHandler = e => {
    const { value } = e.target
    if (value === '가나다순') {
      let productList = [...gotProductLists]
      productList = productList.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
      setGotProductLists(productList)
    } else if (value === '적은금액순') {
      let productList = [...gotProductLists]
      productList = productList.sort((a, b) => a.loan - b.loan)
      setGotProductLists(productList)
    } else if (value === '큰금액순') {
      let productList = [...gotProductLists]
      productList = productList.sort((a, b) => b.loan - a.loan)
      setGotProductLists(productList)
    }
  }
  const onSubmit = async e => {
    e.preventDefault()
    if (!searchValue.type && searchValue.keyword) {
      setOptionError(true)
      return
    } else {
      setOptionError(false)
    }

    const res = await getSearchProducts(searchValue)
    setGotProductLists(res.data.map(item => item))
  }

  useEffect(() => {
    if (getProductLists) {
      setGotProductLists(getProductLists)
    }
  }, [getProductLists])

  return (
    <S.Container>
      <S.Title>맞춤 상품 목록</S.Title>
      <S.SearchContainer onSubmit={onSubmit}>
        <S.Select defaultValue="검색 조건" name="type" onChange={changeValueHandler}>
          <S.Option value="검색 조건" disabled>
            검색 조건
          </S.Option>
          <S.Option value="institution">기관별</S.Option>
          <S.Option value="loan">금액별</S.Option>
        </S.Select>
        <S.Input name="keyword" type="text" placeholder="검색" onChange={changeValueHandler} />
        <S.SearchIcon onClick={onSubmit}>
          <BiSearchAlt />
        </S.SearchIcon>
      </S.SearchContainer>
      {optionError && <S.ErrorText>검색 조건을 선택 해주세요</S.ErrorText>}
      <S.Sort defaultValue="정렬 방법" onChange={changeSortOptionHandler}>
        <S.SortOption value="정렬 방법" disabled>
          정렬
        </S.SortOption>
        <S.SortOption value="가나다순">가나다순</S.SortOption>
        <S.SortOption value="적은금액순">적은 금액순</S.SortOption>
        <S.SortOption value="큰금액순">큰 금액순</S.SortOption>
      </S.Sort>
      <S.ItemContainer>
        {getProductLoading ? <Loader /> : null}
        {!token ? (
          <div>로그인 후 이용 해 주세요!</div>
        ) : gotProductLists ? (
          gotProductLists.map(list => (
            <div key={list.productId}>
              <ProductItem name={list.name} loan={list.loan} logo={list.logo} productId={list.productId} />
            </div>
          ))
        ) : null}
      </S.ItemContainer>
    </S.Container>
  )
}

export default AllProductList
