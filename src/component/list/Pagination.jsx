// Pagination.jsx
import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeft from '../../images/list/Arrow-left.svg'
import ArrowRight from '../../images/list/Arrow-right.svg'

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const PaginationItem = styled.ol`
  margin: 0 5px;
  padding: 5px 10px;
  color: ${(props) => (props.$active ? '#542F1A' : '#000000')};
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;

  &:hover {
    color: ${(props) => (props.$active ? '#000000' : '#542F1A')};
  }
`

const MovePageButton = styled.button`
  border: 0px;
  cursor: pointer;
  width: 40px
  height : 40px
  `
const MovePageImg = styled.img`
  width: 20px;
  height: 20px;
`

const Pagination = ({ pageCount, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1)

  function onClick(i) {
    onPageChange(i)
    setCurrentPage(i)
  }

  const start = Math.max(1, Math.min(currentPage - 2, pageCount - 3))
  const end = Math.min(pageCount, start + 4)

  const goPrevPageClick = () => {
    const newPage = Math.max(1, currentPage - 5)
    onPageChange(newPage)
    setCurrentPage(newPage)
  }

  const goNextPageClick = () => {
    const newPage = Math.min(pageCount, currentPage + 5)
    onPageChange(newPage)
    setCurrentPage(newPage)
    console.log('currentPage : ', currentPage)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    console.log(pageCount)
    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <ul key={i}>
          <PaginationItem
            $active={currentPage === i}
            onClick={() => onClick(i)}
          >
            {i}
          </PaginationItem>
        </ul>,
      )
    }

    return pageNumbers
  }

  return (
    <StyledPagination>
      <MovePageButton onClick={goPrevPageClick}>
        <MovePageImg src={ArrowLeft} alt='왼쪽 화살표' />
      </MovePageButton>
      <PaginationWrapper>{renderPageNumbers()}</PaginationWrapper>
      <MovePageButton onClick={goNextPageClick}>
        <MovePageImg src={ArrowRight} alt='오른쪽 화살표' />
      </MovePageButton>
    </StyledPagination>
  )
}

export default Pagination
