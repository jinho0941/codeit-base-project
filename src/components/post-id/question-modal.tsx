import { useState } from 'react'
import { BsChatText } from 'react-icons/bs'
import { IoCloseOutline } from 'react-icons/io5'
import { toast } from 'sonner'
import api from '../../utils/api'
import { useNavigate } from 'react-router-dom'

type Props = {
  id: number
  onClose: () => void
  img: string
  name: string
}

export const QuestionModal = ({ id, onClose, img, name }: Props) => {
  const [textareaValue, setTextareaValue] = useState<string>('')
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value)
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await api.post(`/subjects/${id}/questions/`, {
        content: textareaValue,
      })
      console.log(response.data)
      navigate(0)
      onClose()
    } catch (error) {
      toast('something went wrong')
    }
  }

  return (
    <>
      <div
        className='absolute inset-0 bg-black/60 z-10 flex justify-center items-center'
        onClick={onClose}
      />
      <div className='w-full flex justify-center '>
        <form
          onSubmit={onSubmit}
          className='p-10 bg-white fixed top-1/2 transform -translate-y-1/2 sl flex flex-col  rounded-2xl md:w-[666px] w-[444px] z-20 '
        >
          <div className='flex items-center'>
            <BsChatText className='h-8 w-8' />
            <span className='ml-3 text-2xl font-semibold'>
              질문을 작성하세요
            </span>
            <IoCloseOutline
              className='ml-auto h-12 w-12 cursor-pointer hover:text-rose-500'
              onClick={onClose}
            />
          </div>
          <div className='mt-10 flex items-center'>
            <span className='text-xl'>To.</span>
            <img
              src={img}
              alt='profile'
              className='h-8 w-8 rounded-full ml-3'
            />
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
      </div>
    </>
  )
}
