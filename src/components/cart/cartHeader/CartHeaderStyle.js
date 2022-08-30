import styled from "styled-components";


export const Herder = styled.div `
  width: 425px;
  height: 8vh;
  margin-bottom: 2em;
  border-bottom: 1px solid rgb(0, 0, 0, .5);
`

export const Container = styled.div `
  width: 400px;
  height: 8vh;
  margin: 0 auto;
  font-size: 2em;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Flex = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;

`
export const LoginTextContainer = styled.div`
  height: 100%;
  font-size: 16px;
`

export const Login = styled.a `
  margin: 0 10px;
  text-decoration: none;
  color: #0096ff;
  &:hover {
    color: rgb(0, 0, 0, .8);
    cursor: pointer;
  }
`

export const Img = styled.img `
  width: 10%;
`


export const test = styled.span`
  margin-left: 3px;
  font-size: 18px; 
`