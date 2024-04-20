import { Button } from '../../../components/ui/button'

type Props = {
  onDelete: () => void
}

export const DeleteQuestionButton = ({ onDelete }: Props) => {
  return (
    <div className='ml-auto'>
      <Button onClick={onDelete} rounded='full' size='sm'>
        삭제
      </Button>
    </div>
  )
}
