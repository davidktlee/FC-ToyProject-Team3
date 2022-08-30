import styled from "styled-components";

export const Footer = styled.div `
  background-color: #0096FF;
  width: 425px;
  height: 60px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;
`

export const Anchor = styled.a `
  text-decoration: none;
  color: rgb(255,255,255, .8);
  &:hover {
    color: #000;
    cursor: pointer;
  }
`

