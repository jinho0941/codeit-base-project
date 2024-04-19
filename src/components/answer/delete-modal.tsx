import { GrAlert } from 'react-icons/gr'
import api from '../../utils/api'
import { useNavigate, useParams } from 'react-router-dom'

type Props = {
  onClose: () => void
}

export const DeleteModal = ({ onClose }: Props) => {
  const params = useParams<{ postId: string }>()
  const postId = params.postId
  const navigation = useNavigate()

  const deletePost = async () => {
    try {
      await api.delete(`/subjects/${postId}/`)
      navigation('/list')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='fixed inset-0 bg-black/50 w-full h-full z-50'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 w-[666px] rounded-xl'>
        <div className='flex flex-col items-center'>
          <GrAlert className='h-16 w-16 text-rose-500' />
          <div className='mt-3 text-3xl text-rose-500 font-bold'>
            정말 삭제하시겠습니까?
          </div>
        </div>
        <div className='mt-7 mb-3 grid grid-cols-2 gap-x-5'>
          <button
            onClick={onClose}
            className='p-3 border-[2px] rounded-xl hover:bg-gray-200'
          >
            취소하기
          </button>
          <button
            onClick={deletePost}
            className='p-3 border-[2px] rounded-xl hover:bg-rose-700 bg-rose-500 text-white'
          >
            삭제하기
          </button>
        </div>
      </div>
    </div>
  )
}
