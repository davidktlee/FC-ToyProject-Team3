import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
export const Footer = styled.div`
  background-color: #0096ff;
  width: 425px;
  height: 60px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;
`

export const Anchor = styled(NavLink)`
  text-decoration: none;
  color: rgb(255, 255, 255, 0.8);
  &:hover {
    color: #000;
    cursor: pointer;
  }
  &.active {
    color: #000;
  }
`
