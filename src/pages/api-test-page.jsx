// api test page
import { useEffect, useState } from 'react'
import { getTest } from '../api/test'
import api from '../utils/api'

const ApiTestPage = () => {
  const [getData, setGetData] = useState()
  const [postData, setPostData] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTest()
        setGetData(response)
        console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const onClick = async () => {
    try {
      const response = await api.post('/subjects/', { name: 'hello world' })
      setPostData(response)
      console.log(response)
    } catch (error) {
      console.error('error:', error)
    }
  }

  return (
    <div>
      <div>get data</div>
      <div>{JSON.stringify(getData)}</div>
      <button onClick={onClick}>post test</button>
      <div>post data</div>
      <div>{JSON.stringify(postData)}</div>
    </div>
  )
}

export default ApiTestPage
