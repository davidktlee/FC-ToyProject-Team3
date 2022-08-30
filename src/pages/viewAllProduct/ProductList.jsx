import React, { useState } from 'react'
import * as S from './ProductListStyle'
import { BiSearchAlt } from 'react-icons/bi'
import ProductItem from '../../common/productItem/ProductItem'
import { useEffect } from 'react'
import { useGetProductsQuery } from '../../api/useApi'

const productLists = [
  { name: '가', loan: 10000 },
  { name: '나', loan: 50000 },
  { name: '라', loan: 5000 },
  { name: '다', loan: 2220 },
]
function ProductList() {
  // 받아온 데이터
  const { data: productList, isLoading, isError } = useGetProductsQuery()
  const [optionValue, setOptionValue] = useState('')
  const [sortOptionValue, setSortOptionValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState(productLists)
  const changeOptionHandler = e => {
    setOptionValue(e.target.value)
    // dispatch 검색 조건을 포함한 함수
  }
  const ChangeInputHandler = e => {
    setInputValue(e.target.value)
    // dispatch 검색 함수
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
  }
  console.log(productList)
  useEffect(() => {}, [])
  return (
    <S.Container>
      <S.Title>상품 목록</S.Title>
      <S.SearchContainer onSubmit={onSubmit}>
        <S.Select defaultValue="검색 조건" onChange={changeOptionHandler}>
          <S.Option value="검색 조건" disabled>
            검색 조건
          </S.Option>
          <S.Option value="이름별">이름별</S.Option>
          <S.Option value="기관별">기관별</S.Option>
        </S.Select>
        <S.Input type="text" placeholder="검색" onChange={ChangeInputHandler} />
        <S.SearchIcon onClick={onSubmit}>
          <BiSearchAlt />
        </S.SearchIcon>
      </S.SearchContainer>
      <S.Sort defaultValue="정렬 방법" onChange={changeSortOptionHandler}>
        <S.SortOption value="정렬 방법" disabled>
          정렬
        </S.SortOption>
        <S.SortOption value="가나다순">가나다순</S.SortOption>
        <S.SortOption value="적은금액순">적은 금액순</S.SortOption>
        <S.SortOption value="큰금액순">큰 금액순</S.SortOption>
      </S.Sort>
      <div>
        {list.map(item => (
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

export default ProductList
