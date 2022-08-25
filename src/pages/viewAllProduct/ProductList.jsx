import React, { useState } from 'react'
import * as S from './ProductListStyle'
import { BiSearchAlt } from 'react-icons/bi'
import ProductItem from '../../common/ProductItem/ProductItem'

function ProductList() {
  const [optionValue, setOptionValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const changeOptionHandler = e => {
    setOptionValue(e.target.value)
  }
  const ChangeInputHandler = e => {
    setInputValue(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault()
  }
  return (
    <S.Container>
      <S.Title>상품 목록</S.Title>
      <h2> H2 화면</h2>
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
      <ProductItem />
    </S.Container>
  )
}

export default ProductList
