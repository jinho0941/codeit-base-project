import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  img: string
  name: string
  questionCount: number
  onClick: () => void
}

export const ListCard = ({ id, img, name, questionCount, onClick }: Props) => {
  return (
    <Link to={`/post/${id}`}>
      <li
        onClick={onClick}
        className='hover:bg-slate-200/50 border border-gray-800 rounded-xl flex flex-col p-6 gap-y-5 cursor-pointer'
      >
        <img src={img} alt='img' className='rounded-full h-20 w-20' />
        <p>{name}</p>
        <div className='flex justify-between text-gray-400'>
          <div className='flex items-center'>
            <IoChatbubbleEllipsesOutline className='h-6 w-6' />
            <span className='ml-1'>받은 질문</span>
          </div>
          <div>{questionCount}</div>
        </div>
      </li>
    </Link>
  )
}
