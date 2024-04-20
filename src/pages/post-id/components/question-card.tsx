import { useState } from 'react'
import { formatDate } from '../../../utils/date'
import api from '../../../utils/api'
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa'

type Props = {
  id: number
  createdAt: string
  content: string
  hasAnswered: boolean
  likes: number
  dislikes: number
}

export const QuestionCard = ({
  id,
  createdAt,
  content,
  hasAnswered,
  likes,
  dislikes,
}: Props) => {
  const date = formatDate(createdAt)

  const [like, setLike] = useState(likes)
  const [dislike, setDislike] = useState(dislikes)

  const likeClicked = async () => {
    try {
      const response = await api.post(`/questions/${id}/reaction/`, {
        type: 'like',
      })
      setLike(response.data.like)
    } catch (error) {
      console.log('some thing went wrong')
    }
  }

  const disLikeClicked = async () => {
    try {
      const response = await api.post(`/questions/${id}/reaction/`, {
        type: 'dislike',
      })
      setDislike(response.data.dislike)
    } catch (error) {
      console.log('some thing went wrong')
    }
  }

  return (
    <div className='bg-white w-full rounded-xl p-6 flex flex-col shadow-lg'>
      <button
        className={`mr-auto border rounded-lg py-1 px-2 text-sm font-extrabold ${
          hasAnswered
            ? 'border-amber-900 text-amber-900'
            : 'border-gray-500 text-gray-500'
        }`}
      >
        {hasAnswered ? '답변 완료' : '미답변'}
      </button>
      <div className='mt-6 text-xs text-gray-400 flex'>
        <span>질문 ·</span>
        <p className='ml-1'>{date}</p>
      </div>
      <p className='font-medium text-xl'>{content}</p>
      <div className='border-t border-gray-300 mt-8' />

      <div className='mt-6 mb-3 text-gray-500'>
        <div className='flex items-center gap-x-8'>
          <button
            onClick={likeClicked}
            className={`flex items-center hover:text-blue-500 ${
              !!like && 'text-sky-500'
            }`}
          >
            <FaRegThumbsUp className='h-4 w-4' />
            <span className='ml-1'>좋아요</span>
            {!!like && <span className='ml-1'>{like}</span>}
          </button>
          <button
            onClick={disLikeClicked}
            className={`flex items-center hover:text-rose-500 ${
              !!dislike && 'text-red-500'
            }`}
          >
            <FaRegThumbsDown className='h-4 w-4 ' />
            <span className='ml-1'>싫어요</span>
            {!!dislike && <span className='ml-1'>{dislike}</span>}
          </button>
        </div>
      </div>
    </div>
  )
}
