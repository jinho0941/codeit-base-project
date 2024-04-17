import { HasQuestions } from './has-questions'
import { NoQuestions } from './no-questions'

type Props = {
  questionCount: number
  name: string
}

export const Questions = ({ questionCount, name }: Props) => {
  const hasQuestions = !!questionCount

  return (
    <div className='xl:px-0 px-10 w-full flex flex-col items-center'>
      <div className='relative mt-20 xl:w-[1111px] w-full flex flex-col items-center bg-amber-800/10 rounded-xl'>
        <button className='absolute -top-10 right-0 rounded-full bg-amber-900 text-white py-1 px-3 hover:bg-rose-500'>
          삭제하기
        </button>
        {hasQuestions ? (
          <HasQuestions questionCount={questionCount} name={name} />
        ) : (
          <NoQuestions />
        )}
      </div>
    </div>
  )
}
