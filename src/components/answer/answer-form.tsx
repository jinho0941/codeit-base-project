import { useState } from 'react'
import api from '../../utils/api'
import { useParams } from 'react-router-dom'

type Props = {
  id: number
  name: string
}

export const AnswerForm = ({ name, id }: Props) => {
  const [textareaValue, setTextareaValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value)
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log(id)
      const response = await api.post(`/questions/${id}/answers/`, {
        content: textareaValue,
        isRejected: false,
      })
      console.log(response)
    } catch (error) {
      console.log('some thing went wrong')
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col ml-auto rounded-2xl w-full z-20 pl-20'
    >
      <div className='mt-10 flex items-center'>
        <span className='ml-2 font-semibold'>{name}</span>
      </div>
      <textarea
        placeholder='질문을 입력해주세요'
        className='mt-5 bg-slate-100 h-40 resize-none border-none p-2 outline-none rounded-xl'
        value={textareaValue}
        onChange={handleChange}
      />
      <button
        type='submit'
        disabled={!textareaValue}
        className='mt-3 mb-8 w-full bg-amber-900 p-4 text-white rounded-xl disabled:bg-amber-900/30 transition duration-200'
      >
        질문 보내기
      </button>
    </form>
  )
}
