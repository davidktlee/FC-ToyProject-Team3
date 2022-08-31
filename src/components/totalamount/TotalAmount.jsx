import React, { memo, useState, useEffect } from 'react'
import * as S from './TotalAmountStyle'

function TotalAmount({ loan }) {
  const [commaLoan, setCommaLoan] = useState(0)
  const toComma = () => {
    const addComma = loan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    setCommaLoan(addComma)
  }
  useEffect(() => {
    toComma()
  }, [loan])
  return (
    <>
      <S.Container>
        <S.Text>신청 가능 대출금 총 합</S.Text>
        <S.Loan>{commaLoan} 원</S.Loan>
      </S.Container>
    </>
  )
}

export default memo(TotalAmount)
