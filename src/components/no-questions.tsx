import { BsChatText } from 'react-icons/bs'
import { PiFloppyDiskThin } from 'react-icons/pi'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem; /* 2xl에 해당하는 크기 */
  color: #fbbf24; /* Tailwind CSS의 amber-800에 해당하는 색상 */
`

const InnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MessageIcon = styled(BsChatText)`
  height: 1.5rem; /* h-6에 해당하는 크기 */
  width: 1.5rem; /* w-6에 해당하는 크기 */
`

const MessageText = styled.span`
  margin-left: 0.75rem; /* ml-3에 해당하는 값 */
`

const IconContainer = styled.div`
  height: 20.8125rem; /* 333px에 해당하는 크기 */
  display: flex;
  justify-content: center;
  align-items: center;
`

const DiskIcon = styled(PiFloppyDiskThin)`
  height: 11rem; /* h-40에 해당하는 크기 */
  width: 11rem; /* w-40에 해당하는 크기 */
  color: rgba(
    251,
    191,
    24,
    0.3
  ); /* Tailwind CSS의 amber-900/30에 해당하는 색상 */
`

export const NoQuestions = () => {
  return (
    <Container>
      <InnerDiv>
        <MessageIcon />
        <MessageText>아직 질문이 없습니다.</MessageText>
      </InnerDiv>
      <IconContainer>
        <DiskIcon />
      </IconContainer>
    </Container>
  )
}
