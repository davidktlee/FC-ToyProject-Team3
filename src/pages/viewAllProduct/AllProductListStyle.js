import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  /* font-weight: bold; */
  color: #0096ff;
`
export const SearchContainer = styled.form`
  width: 340px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  position: relative;
`
export const Select = styled.select`
  width: 100px;
  height: 34px;
  background: transparent;
  border: 1px solid #0096ff;
  border-radius: 5px;
  outline: none;
  padding: 0 5px;
  margin-right: 5px;
  position: relative;
  z-index: 3;
`
export const Option = styled.option`
  color: #0096ff;
`

export const Input = styled.input`
  height: 30px;
  border: 1px solid;
  border-radius: 5px;
  padding-left: 5px;
  flex-grow: 1;
  color: #0096ff;
  font-weight: bold;
  outline: none;
  /* &::placeholder {
    color: #0096ff;
  } */
`
export const SearchIcon = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  font-size: 1.5rem;
  margin-right: 5px;
  cursor: pointer;
  color: black;
  :hover {
    color: #0096ff;
  }
`
export const Sort = styled.select`
  width: 110px;
  height: 24px;
  margin-left: 42px;
  border-radius: 50px;
  border: 1px solid #0096ff;
`
export const SortOption = styled.option``
