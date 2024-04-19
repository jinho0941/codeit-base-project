import { useEffect, useState } from 'react'
import api from '../utils/api'
import { ISubject, ISubjectApiResponse } from '../model/api'

const useListData = (page: number) => {
  const [subjectData, setSubjectData] = useState<ISubjectApiResponse | null>(
    null,
  )

  useEffect(() => {
    const fetchData = async () => {
      const limit = 6
      const offset = (page - 1) * limit
      try {
        const response = await api.get(
          `/subjects/?limit=${limit}&offset=${offset}`,
        )
        setSubjectData(response.data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [page])

  const sortByName = (subjects: ISubject[]) => {
    return subjects.sort((a, b) => a.name.localeCompare(b.name))
  }

  const sortByDate = (subjects: ISubject[]) => {
    return subjects.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
  }

  const sortSubjectsByName = () => {
    const sortedSubjects = sortByName(subjectData?.results || [])
    setSubjectData((prev) => {
      if (!prev) return null
      return { ...prev, results: sortedSubjects }
    })
  }

  const sortSubjectsByDate = () => {
    const sortedSubjects = sortByDate(subjectData?.results || [])
    setSubjectData((prev) => {
      if (!prev) return null
      return { ...prev, results: sortedSubjects }
    })
  }

  return { subjectData, sortSubjectsByName, sortSubjectsByDate }
}

export default useListData
