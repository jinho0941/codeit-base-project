import { Button } from '../../../components/ui/button'

type Props = {
  onOpen: () => void
}

export const QuestionModalButton = ({ onOpen }: Props) => {
  return (
    <div className='fixed bottom-5 right-5'>
      <Button onClick={onOpen} rounded='lg' size='lg'>
        질문 작성
      </Button>
    </div>
  )
}
