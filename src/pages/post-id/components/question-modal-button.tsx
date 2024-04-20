import styled from 'styled-components'
import { Button } from '../../../components/ui/button'

const FixedDiv = styled.div`
  position: fixed;
  bottom: 1.25rem; /* bottom-5 */
  right: 1.25rem; /* right-5 */
`

type Props = {
  onOpen: () => void
}

export const QuestionModalButton = ({ onOpen }: Props) => {
  return (
    <FixedDiv>
      <Button onClick={onOpen} rounded='lg' size='lg'>
        질문 작성
      </Button>
    </FixedDiv>
  )
}
