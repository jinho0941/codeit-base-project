import { Avatar } from '../../../components/ui/avatar'
import { formatDate } from '../../../utils/date'

type Props = {
  img: string
  name: string
  createdAt: string
  content: string
}

export const Answer = ({ img, name, createdAt, content }: Props) => {
  const date = formatDate(createdAt)

  return (
    <>
      <div className='mt-8 flex items-center'>
        <Avatar imgUrl={img} size='sm' />
        <h2 className='text-xl ml-3'>{name}</h2>
        <span className='ml-2 text-sm'>{date}</span>
      </div>
      <p className='mt-2 break-words mr-5 p-3'>{content}</p>
    </>
  )
}
