import { BsChatText } from 'react-icons/bs'
import { Modal } from '../../../components/ui/modal'
import { IoCloseOutline } from 'react-icons/io5'
import api from '../../../utils/api'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '../../../components/ui/button'

type Props = {
  id: number
  img: string
  name: string
  onClose: () => void
}

export const CreateQuestionModal = ({ id, img, name, onClose }: Props) => {
  const [textareaValue, setTextareaValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value)
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      const response = await api.post(`/subjects/${id}/questions/`, {
        content: textareaValue,
      })
      console.log(response.data)
      onClose()
    } catch (error) {
      toast('something went wrong')
    }
  }

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <Modal onClose={onClose}>
      <div className='w-full flex justify-center ' onClick={stopPropagation}>
        <form
          onSubmit={onSubmit}
          className='p-10 bg-white fixed top-1/2 transform -translate-y-1/2 sl flex flex-col  rounded-2xl md:w-[666px] w-[444px] space-y-5'
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
          <div className='flex items-center'>
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
            className='bg-slate-100 h-40 resize-none border-none p-2 outline-none rounded-xl'
            value={textareaValue}
            onChange={handleChange}
          />
          <Button rounded='lg' size='lg' disabled={!textareaValue}>
            질문 보내기
          </Button>
        </form>
      </div>
    </Modal>
  )
}
