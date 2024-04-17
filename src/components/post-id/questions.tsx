import { HasQuestions } from './has-questions'
import { NoQuestions } from './no-questions'

type Props = {
  questionCount: number
  name: string
}

export const Questions = ({ questionCount, name }: Props) => {
  const hasQuestions = !!questionCount

  return (
    <div className='xl:px-0 px-10 w-full flex justify-center'>
      <div className='mt-20 xl:w-[1111px] w-full flex flex-col items-center bg-amber-800/10 rounded-xl'>
        {hasQuestions ? (
          <HasQuestions questionCount={questionCount} />
        ) : (
          <NoQuestions />
        )}
      </div>
    </div>
  )
}
