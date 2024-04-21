import { BsChatText } from 'react-icons/bs'
import { IQuestion, ISubject } from '../../../model/api'
import { NoQuestions } from '../../../components/no-questions'
import { QuestionCard } from './question-card'

type Props = {
  questionCount: number
  questions: IQuestion[]
  subject: ISubject
}

export const QuestionFeed = ({ questionCount, questions, subject }: Props) => {
  const hasQuestion = !!questionCount

  return (
    <section className='lg:w-[888px] w-full mx-auto xl:px-0 px-5 pt-12'>
      <div className='bg-amber-800/10 rounded-xl flex flex-col py-3 border border-amber-700 shadow-md'>
        {!hasQuestion ? (
          <NoQuestions />
        ) : (
          <>
            <h2 className='flex justify-center items-center text-2xl font-medium text-amber-800'>
              <BsChatText /> <span className='ml-3'>{questionCount}</span>개의
              질문이 있습니다.
            </h2>
            <ul className='mt-5 w-full space-y-5 p-5'>
              {questions.map((question) => (
                <QuestionCard
                  key={question.id}
                  id={question.id}
                  createdAt={question.createdAt}
                  content={question.content}
                  answer={question.answer!}
                  likes={question.like}
                  dislikes={question.dislike}
                  img={subject.imageSource}
                  name={subject.name}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}
