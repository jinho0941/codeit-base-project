import { useParams } from 'react-router-dom'
import { UserHeroHeader } from '../../components/user-hero-header'
import useSubjectIdData from '../../hooks/use-subject-id-data'
import { ShareIcons } from '../../components/share-icons'
import { QuestionFeed } from './components/question-feed'
import useQuestionsData from '../../hooks/use-questions-data'

const PostIdPage = () => {
  const params = useParams<{ postId: string }>()
  const postId = params.postId

  const { subjectIdData } = useSubjectIdData(postId!)
  const { questionsData } = useQuestionsData(postId!, 5, 0)

  console.log('check')

  return (
    <main className='h-screen bg-slate-300'>
      <UserHeroHeader
        imgUrl={subjectIdData?.imageSource}
        name={subjectIdData?.name}
      />
      <div className='flex justify-center '>
        <ShareIcons />
      </div>
      <QuestionFeed />
    </main>
  )
}

export default PostIdPage
