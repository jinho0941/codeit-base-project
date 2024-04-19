import { toast } from 'sonner'
import { Logo } from '../../components/logo'
import api from '../../utils/api'
import { BottomBackgroundImg } from './components/bottom-background-img'
import CreateAnswerForm from './components/create-answer-form'
import { DesktopLinkButton } from './components/desktop-link-button'
import { MobileLinkButton } from './components/mobile-link-button'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const onCreate = async (name: string) => {
    try {
      const response = await api.post('/subjects/', { name })
      const postId = response.data.id
      localStorage.setItem('postId', postId)
      navigate(`/post/${postId}/answer`)
    } catch (error) {
      toast.error('이름 생성에 실패하였습니다.')
    }
  }

  return (
    <main className='h-screen bg-slate-300'>
      <DesktopLinkButton />
      <div className='flex flex-col items-center pt-28'>
        <Logo />
        <MobileLinkButton />
      </div>
      <CreateAnswerForm onCreate={onCreate} />
      <BottomBackgroundImg />
    </main>
  )
}

export default HomePage
