import { BsChatText } from 'react-icons/bs'
import { IQuestion, ISubject } from '../../../model/api'
import { NoQuestions } from '../../../components/no-questions'
import { QuestionCard } from './question-card'
import { Button } from '../../../components/ui/button'

type Props = {
  deleteModalOpen: () => void
  questionCount: number
  questions: IQuestion[]
  subject: ISubject
  updateQuestions: () => void
}

export const QuestionFeed = ({
  deleteModalOpen,
  questionCount,
  questions,
  subject,
  updateQuestions,
}: Props) => {
  const hasQuestion = !!questionCount

  return (
    <section className='lg:w-[888px] w-full mx-auto xl:px-0 px-5 pt-5'>
      <div className='py-3 flex justify-end'>
        <Button onClick={deleteModalOpen} rounded='full' width={120}>
          삭제하기
        </Button>
      </div>
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
                  answer={question.answer}
                  likes={question.like}
                  dislikes={question.dislike}
                  name={subject.name}
                  img={subject.imageSource}
                  updateQuestions={updateQuestions}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}
