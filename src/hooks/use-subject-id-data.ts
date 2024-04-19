import { useEffect, useState } from 'react'
import { ISubject } from '../model/api'
import api from '../utils/api'

const useSubjectIdData = (postId: string) => {
  const [subjectIdData, setSubjectIdData] = useState<ISubject | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/subjects/${postId}/`)
        setSubjectIdData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [postId])

  return { subjectIdData }
}

export default useSubjectIdData
