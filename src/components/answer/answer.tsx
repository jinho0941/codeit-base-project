import { formatDate } from './question-card'

type Props = {
  name: string
  createdAt: string
  content: string
}

export const Answer = ({ name, createdAt, content }: Props) => {
  const created = formatDate(createdAt)
  return (
    <div className='flex mt-10'>
      <div className='rounded-full h-14 w-14 bg-slate-500' />
      <div className='flex flex-col ml-3'>
        <div>
          <span className='text-2xl'>{name}</span>
          <span className='ml-2 text-sm text-gray-500'>{created}</span>
        </div>
        <div className='text-lg font-light'>{content}</div>
      </div>
    </div>
  )
}
