import { Button } from '../../../components/ui/button'
import styled from 'styled-components'

const DivWithMarginAuto = styled.div`
  margin-left: auto;
`

type Props = {
  onDelete: () => void
}

export const DeleteQuestionButton = ({ onDelete }: Props) => {
  return (
    <DivWithMarginAuto>
      <Button onClick={onDelete} rounded='full' size='sm'>
        삭제
      </Button>
    </DivWithMarginAuto>
  )
}
