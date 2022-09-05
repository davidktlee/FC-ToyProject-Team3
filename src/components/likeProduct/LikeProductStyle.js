import styled from 'styled-components'

export const Container = styled.div`
  width: 340px;
  height: 120px;
  display: flex;
  align-items: center;
  margin: 18px auto;
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
export const Img = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`
export const ManualContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  line-height: 1.5;
  margin-right: 50px;
`
export const Star = styled.span`
  font-size: 24px;
  position: absolute;
  top: 4px;
  right: 14px;
  cursor: pointer;
  color: #0096ff;
`

export const PurchaseBtn = styled.div`
  width: 120px;
  position: absolute;
  bottom: 4px;
  right: 0;
`

export const InterestedItems = styled.div`
  margin: 2px 50px 23px 20px;
`

export const User = styled.div`
  width: 340px;
  margin: 0 auto;
`
export const Username = styled.span`
  font-weight: 900;
  color: #0096ff;
  font-size: 1.2rem;
`

export const ScrollBar = styled.div`
  margin: 20px 0 0 16px;
  height: 72vh;
  overflow-y: scroll;
  text-align: center;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  color: #0096ff;
  margin-bottom: 23px;
`
export const deleteBtnContainer = styled.div`
  width: 370px;
  display: flex;
  justify-content: end;
`
