import { useEffect, useState } from 'react'
import { Header } from '../components/list/header'
import api from '../utils/api'
import { useParams } from 'react-router-dom'
import { ListCard } from '../components/list/list-card'
import { Footer } from '../components/list/footer'

interface Subject {
  id: number
  name: string
  imageSource: string
  questionCount: number
  createdAt: string
}

interface SubjectResponse {
  count: number
  next: string | null
  previous: string | null
  results: Subject[]
}

const ListPage = () => {
  const params = useParams<{ page: string }>()
  const page = params.page ? parseInt(params.page) : 1
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<SubjectResponse | null>(null)

  const sortByName = (subjects: Subject[]) => {
    return subjects.sort((a, b) => a.name.localeCompare(b.name))
  }

  const sortByDate = (subjects: Subject[]) => {
    return subjects.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
  }

  const onNameSortClick = () => {
    const sortedSubjects = sortByName(data?.results || [])
    setData((prev) => {
      if (!prev) return null
      return { ...prev, results: sortedSubjects }
    })
  }

  const onDateSortClick = () => {
    const sortedSubjects = sortByDate(data?.results || [])
    setData((prev) => {
      if (!prev) return null
      return { ...prev, results: sortedSubjects }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      const limit = 6
      const offset = (page - 1) * limit
      console.log(offset)
      try {
        setIsLoading(true)
        const response = await api.get(
          `/subjects/?limit=${limit}&offset=${offset}`,
        )
        setData(response.data)
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [page])

  if (!data) {
    return <div>...loading</div>
  }

  return (
    <>
      <Header
        onNameSortClick={onNameSortClick}
        onDateSortClick={onDateSortClick}
      />
      <ul className='grid grid-cols-2 sm:grid-cols-3 lg:w-[900px] w-full p-10 mx-auto gap-5'>
        {data?.results.map((result) => (
          <ListCard
            key={result.id}
            id={result.id}
            img={result.imageSource}
            name={result.name}
            questionCount={result.questionCount}
            onClick={() => {}}
          />
        ))}
      </ul>
      <Footer count={data.count} page={page} />
    </>
  )
}

export default ListPage
