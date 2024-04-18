// Pagination.jsx
import React, { useState } from 'react'
import styled from 'styled-components'

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const PaginationItem = styled.span`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${(props) => (props.active ? '#ccc' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.active ? '#ccc' : '#0000ff')};
  }
`

const Pagination = ({ pageCount, currentPage, onPageChange }) => {
  const [index, setIndex] = useState(0)
  function onClick(i) {
    onPageChange(i)
    setIndex(i)
  }
  const start = Math.max(0, Math.min(index - 3, pageCount - 4))
  const end = Math.min(pageCount, start + 5)

  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <React.Fragment key={i}>
          <PaginationItem active={currentPage === i} onClick={() => onClick(i)}>
            {i}
          </PaginationItem>
        </React.Fragment>,
      )
    }
    return pageNumbers.slice(start, end)
  }

  return <PaginationWrapper>{renderPageNumbers()}</PaginationWrapper>
}

export default Pagination
