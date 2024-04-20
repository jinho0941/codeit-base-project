import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import styled from 'styled-components'

const StyledContainer = styled.div`
  padding-top: 2.5rem; /* pt-10 */
  display: flex;
  justify-content: center; /* justify-center */
`

const StyledLeftIcon = styled(BiChevronLeft)`
  height: 1.5rem; /* h-6 */
  width: 1.5rem; /* w-6 */
`

const StyledRightIcon = styled(BiChevronRight)`
  height: 1.5rem; /* h-6 */
  width: 1.5rem; /* w-6 */
`

const StyledDiv = styled.div`
  display: flex;
  gap: 1.25rem; /* gap-x-5 */
  margin-left: 2.5rem; /* mx-10 */
  margin-right: 2.5rem; /* mx-10 */
  align-items: center; /* items-center */
`

type Props = {
  startPage: number
  endPage: number
  currentPage: number
  totalPages: number
  goToPrevPage: () => void
  goToNextPage: () => void
  goToPage: (page: number) => void
}

export const Pagination = ({
  startPage,
  endPage,
  currentPage,
  totalPages,
  goToPrevPage,
  goToNextPage,
  goToPage,
}: Props) => {
  const generatePageNumbers = () => {
    const pages = []
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          style={
            currentPage === i
              ? { fontWeight: 'bold', fontSize: '1.25rem', color: '#4f46e5' }
              : {}
          }
        >
          {i}
        </button>,
      )
    }

    return pages
  }

  return (
    <StyledContainer>
      <button onClick={goToPrevPage} disabled={currentPage === 1}>
        <StyledLeftIcon />
      </button>
      <StyledDiv>{generatePageNumbers()}</StyledDiv>
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        <StyledRightIcon />
      </button>
    </StyledContainer>
  )
}
