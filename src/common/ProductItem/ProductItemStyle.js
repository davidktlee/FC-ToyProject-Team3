import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  margin: 10px auto;
  border: 1px solid #0096ff;
  border-radius: 10px;
  position: relative;
`
export const Logo = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid;
  border-radius: 50px;
  margin-left: 10px;
`
export const ManualContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  line-height: 1.5;
`
export const Star = styled.span`
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`
