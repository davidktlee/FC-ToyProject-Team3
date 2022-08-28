import styled from "styled-components";

export const Container = styled.div `
  width: 425px;
  height: 8vh;
  margin-bottom: 2em;
  border-bottom: 1px solid rgb(0, 0, 0, .5);
`
export const Inner = styled.div `
  width: 400px;
  height: 8vh;
  margin: 0 auto;
  font-size: 2em;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.img `
  width: 10%;
  margin-left: 180px;
`
export const CartBtn = styled.div `
  width: 40px;
  height: 40px;
  border: 2px solid #0096FF;
  border-radius: 20px;
  background-image: url("/src/assets/cart.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25px
`