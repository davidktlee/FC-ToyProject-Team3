import styled from 'styled-components'

export const User = styled.div`
  width: 340px;
  margin: 0 auto;
`
export const Username = styled.span`
  font-weight: 900;
  color: #0096ff;
  font-size: 1.2rem;
`
export const ManualText = styled.div`
  text-align: center;
  font-weight: 900;
  margin: 20px;
`
export const ItemContainer = styled.div`
  margin: 20px;
  height: 400px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {  
    display: none;
  }
`
export const LoginText = styled.div`
  text-align: center;
`
export const LoginBtn = styled.span`
  text-decoration: underline;
  cursor: pointer;
`
export const Loader = styled.div`
  text-align: center;
`

export const InterestedItems = styled.div`
  margin: 2px 50px 23px 20px;
`
