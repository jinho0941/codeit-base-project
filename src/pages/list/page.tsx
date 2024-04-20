import { useNavigate, useParams } from 'react-router-dom'
import { Header } from './components/header'
import { Title } from './components/title'
import { SortOptions } from './components/sort-options'
import useListData from '../../hooks/use-subjects-data'
import { ListCard } from './components/list-card'
import { Pagination } from './components/pagination'
import usePagination from '../../hooks/use-pagination'
import styled from 'styled-components'

const StyledMain = styled.main`
  height: 100vh; /* h-[100vh] */
  max-width: 75rem; /* xl:w-[1200px] */
  padding-left: 0; /* xl:px-0 */
  padding-right: 0; /* xl:px-0 */
  padding: 0.625rem; /* px-5 */
  margin-left: auto;
  margin-right: auto;
`

const StyledSection = styled.section`
  padding-top: 4rem; /* pt-16 */
  display: flex;
  flex-direction: column; /* sm:flex-col */
  flex-wrap: wrap; /* flex-row */
  justify-content: space-between; /* sm:justify-normal justify-between */
  align-items: center; /* items-center */
  gap: 1.25rem; /* gap-y-5 */

  /* Responsive Styles */
  @media (min-width: 640px) {
    flex-direction: column; /* sm:flex-col */
    justify-content: normal; /* sm:justify-normal */
  }
`
const StyledUl = styled.ul`
  padding-top: 2.5rem; /* pt-10 */
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* grid-cols-2 */
  gap: 0.625rem; /* gap-x-2 gap-y-2 */
  max-width: 55.5rem; /* lg:w-[888px] */
  margin-left: auto;
  margin-right: auto;

  /* Responsive Styles */
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* sm:grid-cols-3 */
    grid-gap: 1.25rem; /* sm:gap-x-5 sm:gap-y-5 */
  }
`

const ListPage = () => {
  const params = useParams<{ page: string }>()
  const page = params.page ? parseInt(params.page) : 1

  const navigate = useNavigate()

  const { subjectData, sortSubjectsByDate, sortSubjectsByName } =
    useListData(page)
  const {
    startPage,
    endPage,
    currentPage,
    totalPages,
    goToPrevPage,
    goToNextPage,
    goToPage,
  } = usePagination(subjectData?.count ?? 0, page)

  const onLinkClick = () => {
    const postId = localStorage.getItem('postId')
    console.log(postId)
    if (!postId) {
      navigate('/')
      return
    }
    navigate(`/post/${postId}/answer`)
  }

  return (
    <StyledMain>
      <Header onLinkClick={onLinkClick} />
      <StyledSection>
        <Title />
        <SortOptions
          sortSubjectsByDate={sortSubjectsByDate}
          sortSubjectsByName={sortSubjectsByName}
        />
      </StyledSection>

      <StyledUl>
        {!subjectData
          ? Array.from({ length: 6 }).map((_, index) => (
              <ListCard.Skeleton key={index} />
            ))
          : subjectData.results.map((result) => (
              <ListCard
                key={result.id}
                id={result.id}
                img={result.imageSource}
                name={result.name}
                questionCount={result.questionCount}
              />
            ))}
      </StyledUl>
      <Pagination
        startPage={startPage}
        endPage={endPage}
        currentPage={currentPage}
        totalPages={totalPages}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        goToPage={goToPage}
      />
    </StyledMain>
  )
}

export default ListPage
