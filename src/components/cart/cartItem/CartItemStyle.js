import styled from 'styled-components'

export const Container = styled.div`
  width: 340px;
  height: 100px;
  display: flex;
  align-items: center;
  margin: 10px auto;
  border: 1px solid #0096ff;
  border-radius: 10px;
  position: relative;
`
export const Logo = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid;
  border-radius: 50px;
  margin-left: 20px;
`
export const ManualContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  line-height: 1.5;
  margin-right: 50px;
`
export const CancelBtn = styled.span`
  font-size: 24px;
  position: absolute;
  top: 4px;
  right: 14px;
  cursor: pointer;
  color: #FF5252;
`