import { useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import api from '../../utils/api'
import { toast } from 'sonner'

export const Form = () => {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value
    setInputValue(newValue)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await api.post('/subjects/', { name: inputValue })
      const postId = response.data.id
      localStorage.setItem('postId', postId)
      navigate(`/post/${postId}/answer`)
    } catch (error) {
      toast.error('something went wrong')
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className='bg-white w-[444px] mt-10 rounded-xl p-6 space-y-6'
    >
      <div className='relative'>
        <input
          onChange={handleInputChange}
          type='text'
          placeholder='이름을 입력하세요'
          className='w-full outline-none border border-slate-500 rounded-lg p-4 px-10'
        />
        <FiUser className='h-6 w-6 absolute transform -translate-y-1/2 top-1/2 left-3 text-slate-500' />
      </div>
      <button
        type='submit'
        className='w-full p-4 bg-amber-900 rounded-lg text-white hover:bg-amber-900/70 disabled:bg-amber-900/10'
      >
        질문 받기
      </button>
    </form>
  )
}
