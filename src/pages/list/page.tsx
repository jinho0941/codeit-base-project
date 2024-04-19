import { useNavigate, useParams } from 'react-router-dom'
import { Header } from './components/header'
import { Title } from './components/title'
import { SortOptions } from './components/sort-options'
import useListData from '../../hooks/use-subjects-data'
import { ListCard } from './components/list-card'
import { Pagination } from './components/pagination'
import usePagination from '../../hooks/use-pagination'

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
    <main className='h-[100vh] xl:w-[1200px] xl:px-0 px-5 mx-auto'>
      <Header onLinkClick={onLinkClick} />
      <section className='pt-16 flex sm:flex-col flex-row sm:justify-normal justify-between items-center gap-y-5'>
        <Title />
        <SortOptions
          sortSubjectsByDate={sortSubjectsByDate}
          sortSubjectsByName={sortSubjectsByName}
        />
      </section>

      <ul className='pt-10 grid sm:grid-cols-3 grid-cols-2 lg:w-[888px] mx-auto sm:gap-x-5 sm:gap-y-5 gap-x-2 gap-y-2'>
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
      </ul>
      <Pagination
        startPage={startPage}
        endPage={endPage}
        currentPage={currentPage}
        totalPages={totalPages}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        goToPage={goToPage}
      />
    </main>
  )
}

export default ListPage
