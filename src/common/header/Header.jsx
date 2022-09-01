import React from 'react'
import * as S from './HeaderStyle'
import { AiFillShopping } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function Header() {
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies()

  const signOut = () => {
    removeCookie('accessToken')
    alert('로그아웃 되었습니다!')
  }

  return (
    <>
      {cookies.accessToken ? (
        <S.Header>
          <S.Container>
            <S.Flex>
              <S.Img src="https://cdn.sisamagazine.co.kr/news/photo/202109/401832_401982_133.png" alt="" />
              <S.LoginTextContainer>
                <S.Login
                  onClick={() => {
                    navigate('/cart')
                  }}
                >
                  장바구니
                </S.Login>
                <S.Login
                  onClick={() => {
                    signOut()
                    navigate('/signin')
                  }}
                >
                  로그아웃
                </S.Login>
              </S.LoginTextContainer>
            </S.Flex>
          </S.Container>
        </S.Header>
      ) : (
        <S.Header>
          <S.Container>
            <S.Flex>
              <S.Img src="https://cdn.sisamagazine.co.kr/news/photo/202109/401832_401982_133.png" alt="" />
              <S.LoginTextContainer>
                <S.Login
                  onClick={() => {
                    navigate('/signup')
                  }}
                >
                  회원가입
                </S.Login>
                <S.Login
                  onClick={() => {
                    navigate('/signin')
                  }}
                >
                  로그인
                </S.Login>
              </S.LoginTextContainer>
            </S.Flex>
          </S.Container>
        </S.Header>
      )}
    </>
  )
}

export default Header
