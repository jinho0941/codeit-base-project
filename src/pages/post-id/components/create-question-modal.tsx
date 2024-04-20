import { BsChatText } from 'react-icons/bs'
import { Modal } from '../../../components/ui/modal'
import { IoCloseOutline } from 'react-icons/io5'
import api from '../../../utils/api'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '../../../components/ui/button'
import styled from 'styled-components'
import { Avatar } from '../../../components/ui/avatar'

const CenteredContainer = styled.div`
  width: 100%; /* w-full */
  display: flex;
  justify-content: center; /* justify-center */
`

const StyledForm = styled.form`
  padding: 2.5rem; /* p-10 */
  background-color: #fff; /* bg-white */
  position: fixed;
  top: 50%; /* top-1/2 */
  left: 50%;
  transform: translate(-50%, -50%); /* transform -translate-y-1/2 */
  display: flex;
  flex-direction: column; /* flex-col */
  border-radius: 1rem; /* rounded-2xl */
  width: 90%; /* Default width */
  max-width: 41.625rem; /* Maximum width */

  gap: 1.25rem; /* space-y-5 */

  @media (min-width: 768px) {
    width: 41.625rem; /* md:w-[666px] */
  }
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledIcon = styled(BsChatText)`
  height: 2rem; /* h-8 */
  width: 2rem; /* w-8 */
`

const StyledQuestionText = styled.span`
  margin-left: 0.75rem;
  font-size: 1.5rem;
  font-weight: 600;
`

const StyledCloseIcon = styled(IoCloseOutline)`
  margin-left: auto; /* ml-auto */
  height: 3rem; /* h-12 */
  width: 3rem; /* w-12 */
  cursor: pointer;

  &:hover {
    color: #f43f5e; /* hover:text-rose-500 */
  }
`

const StyledToSpan = styled.span`
  font-size: 1.25rem; /* text-xl */
`

const StyledName = styled.span`
  margin-left: 0.5rem; /* ml-2 */
  font-weight: 600; /* font-semibold */
`

const StyledTextarea = styled.textarea`
  background-color: #eeeeee; /* bg-slate-100 */
  height: 10rem; /* h-40 */
  resize: none; /* resize-none */
  border: none; /* border-none */
  padding: 0.5rem; /* p-2 */
  outline: none; /* outline-none */
  border-radius: 0.75rem; /* rounded-xl */
`

type Props = {
  id: number
  img: string
  name: string
  onClose: () => void
}

export const CreateQuestionModal = ({ id, img, name, onClose }: Props) => {
  const [textareaValue, setTextareaValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value)
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      const response = await api.post(`/subjects/${id}/questions/`, {
        content: textareaValue,
      })
      console.log(response.data)
      onClose()
    } catch (error) {
      toast('something went wrong')
    }
  }

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <Modal onClose={onClose}>
      <CenteredContainer onClick={stopPropagation}>
        <StyledForm onSubmit={onSubmit}>
          <FlexContainer>
            <StyledIcon />
            <StyledQuestionText>질문을 작성하세요</StyledQuestionText>
            <StyledCloseIcon onClick={onClose} />
          </FlexContainer>
          <FlexContainer>
            <StyledToSpan>To.</StyledToSpan>
            <Avatar imgUrl={img} size='sm' />
            <StyledName>{name}</StyledName>
          </FlexContainer>
          <StyledTextarea
            placeholder='질문을 입력해주세요'
            value={textareaValue}
            onChange={handleChange}
          />
          <Button rounded='lg' size='lg' disabled={!textareaValue}>
            질문 보내기
          </Button>
        </StyledForm>
      </CenteredContainer>
    </Modal>
  )
}
