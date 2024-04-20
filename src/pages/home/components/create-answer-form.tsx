import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { FiUser } from 'react-icons/fi'
import { toast } from 'sonner'
import styled from 'styled-components'

const StyledForm = styled.form`
  margin-top: 5rem; /* mt-20 */
  display: flex;
  flex-direction: column;
  gap: 1.25rem; /* gap-y-5 */

  /* Responsive Styles */
  @media (min-width: 640px) {
    width: 22.875rem; /* sm:w-[366px] */
    padding: 0; /* sm:px-0 */
  }
  padding: 0.625rem; /* px-5 */
  margin-left: auto;
  margin-right: auto;
`

type Props = {
  onCreate: (name: string) => void
}

export const CreateAnswerForm = ({ onCreate }: Props) => {
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
    <StyledForm onSubmit={onSubmit}>
      <Input
        rounded='lg'
        icon={FiUser}
        value={name}
        onChange={onChange}
        placeholder='이름을 입력하세요'
      />
      <Button rounded='lg'>질문 받기</Button>
    </StyledForm>
  )
}
