import React, { useState } from 'react'
import * as S from './AllProductListStyle'
import { BiSearchAlt } from 'react-icons/bi'
import ProductItem from '../../common/productItem/ProductItem'
import { useEffect } from 'react'
import { useGetProductsQuery, useGetSearchProductsMutation } from '../../api/useApi'

const productLists = [
  { name: '가', loan: 10000 },
  { name: '나', loan: 50000 },
  { name: '라', loan: 5000 },
  { name: '다', loan: 2220 },
]

function AllProductList() {
  const { data: productLists, isLoading, isError } = useGetProductsQuery()
  const { data: searchedProductLists } = useGetSearchProductsMutation()
  const [getSearchProducts] = useGetSearchProductsMutation()

  const [searchValue, setSearchValue] = useState({
    type: '',
    keyword: '',
  })
  const [sortOptionValue, setSortOptionValue] = useState('')
  const [list, setList] = useState(productLists)
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
      let productList = [...productLists]
      productList = productList.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
      setList(productList)
    } else if (value === '적은금액순') {
      let productList = [...productLists]
      productList = productList.sort((a, b) => a.loan - b.loan)
      setList(productList)
    } else if (value === '큰금액순') {
      let productList = [...productLists]
      productList = productList.sort((a, b) => b.loan - a.loan)
      setList(productList)
    }
  }
  const onSubmit = e => {
    e.preventDefault()
    if (!searchValue.type && searchValue.keyword) {
      setOptionError(true)
      return
    } else {
      setOptionError(false)
    }

    console.log(searchValue)
    //dispatch 함수
    getSearchProducts(searchValue)
  }
  console.log(searchedProductLists)

  return (
    <S.Container>
      <S.Title>상품 목록</S.Title>
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
      <div>
        {searchedProductLists &&
          searchedProductLists.map(item => (
            <>
              <div>{item.name}</div>
              <div>{item.loan}</div>
            </>
          ))}
      </div>
      <ProductItem />
    </S.Container>
  )
}

export default AllProductList
