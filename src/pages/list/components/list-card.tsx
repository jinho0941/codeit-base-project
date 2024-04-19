import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Skeleton } from '../../../components/ui/skeleton'

type Props = {
  id: number
  img: string
  name: string
  questionCount: number
}

export const ListCard = ({ id, img, name, questionCount }: Props) => {
  return (
    <Link
      to={`/post/${id}`}
      className='hover:bg-slate-200/50 border border-gray-800 rounded-xl flex flex-col p-6 gap-y-5 cursor-pointer'
    >
      <img src={img} alt='img' className='rounded-full h-20 w-20' />
      <p className='line-clamp-1'>{name}</p>
      <div className='flex justify-between text-gray-400'>
        <div className='flex items-center'>
          <IoChatbubbleEllipsesOutline className='h-6 w-6' />
          <p className='ml-1'>받은 질문</p>
        </div>
        <span>{questionCount}</span>
      </div>
    </Link>
  )
}

ListCard.Skeleton = () => {
  return <Skeleton rounded='lg' height={200} />
}
