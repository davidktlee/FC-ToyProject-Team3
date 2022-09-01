import React from 'react'
import * as S from './NotFoundStyle'
function NotFound() {
  return (
    <>
      <S.Container>
        <div>404 NOT FOUND!</div>
        요청하신 페이지를 찾을 수 없습니다!
      </S.Container>
    </>
  )
}

export default NotFound
