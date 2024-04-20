import { toast } from 'sonner'
import { Logo } from '../../components/logo'
import api from '../../utils/api'
import { BottomBackgroundImg } from './components/bottom-background-img'
import { CreateAnswerForm } from './components/create-answer-form'
import { DesktopLinkButton } from './components/desktop-link-button'
import { MobileLinkButton } from './components/mobile-link-button'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.main`
  height: 100vh;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7rem;
`

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
    <Main>
      <DesktopLinkButton />
      <ContentWrapper>
        <Logo />
        <MobileLinkButton />
      </ContentWrapper>
      <CreateAnswerForm onCreate={onCreate} />
      <BottomBackgroundImg />
    </Main>
  )
}

export default HomePage
