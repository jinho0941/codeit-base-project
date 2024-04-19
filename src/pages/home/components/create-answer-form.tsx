import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { FiUser } from 'react-icons/fi'
import { toast } from 'sonner'

type Props = {
  onCreate: (name: string) => void
}

const CreateAnswerForm = ({ onCreate }: Props) => {
  const [name, setName] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name) {
      toast.error('이름을 입력해주세요.')
      return
    }
    onCreate(name)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <form
      className='mt-20 flex flex-col sm:w-[366px] w-full sm:px-0 px-5 mx-auto gap-y-5'
      onSubmit={onSubmit}
    >
      <Input
        rounded='lg'
        icon={FiUser}
        value={name}
        onChange={onChange}
        placeholder='이름을 입력하세요'
      />
      <Button rounded='lg'>질문 받기</Button>
    </form>
  )
}

export default CreateAnswerForm
