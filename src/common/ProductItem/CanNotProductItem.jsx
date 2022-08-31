import React, { useEffect, useState } from 'react'
import * as S from './CanNotProductItemStyle'
function ProductItem({ loan, name, logo }) {
  const [commaLoan, setCommaLoan] = useState(loan)
  const toComma = () => {
    const addComma = loan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    setCommaLoan(addComma)
  }

  useEffect(() => {
    toComma()
  }, [loan])
  return (
    <S.Container>
      <S.Logo>
        <S.Img src={logo} alt="bank-logo" />
      </S.Logo>
      <S.ManualContainer>
        <div>{name}</div>
        <div>{commaLoan} 원</div>
      </S.ManualContainer>
    </S.Container>
  )
}

export default ProductItem
