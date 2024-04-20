import { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  border-radius: 1rem;
  width: 100%;
  z-index: 20;
  padding-left: 5rem; /* Adjust the value as needed */
`

const FlexItemsCenter = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
`

const NameSpan = styled.span`
  margin-left: 0.5rem;
  font-weight: bold;
`

const StyledTextarea = styled.textarea`
  margin-top: 1.25rem;
  background-color: #eeeeee;
  height: 10rem;
  resize: none;
  border: none;
  padding: 0.5rem;
  outline: none;
  border-radius: 0.75rem;
`

const StyledButton = styled.button`
  margin-top: 0.75rem;
  margin-bottom: 2rem;
  width: 100%;
  background-color: #ffa300;
  padding: 1rem;
  color: #fff;
  border-radius: 0.75rem;
  &:disabled {
    background-color: rgba(255, 163, 0, 0.3);
  }
  transition: background-color 0.2s;
`

type Props = {
  name: string
  initialValue: string
  onModify: (content: string) => void
  closeForm: () => void
}

export const ModifyForm = ({
  name,
  initialValue,
  onModify,
  closeForm,
}: Props) => {
  const [textareaValue, setTextareaValue] = useState<string>(initialValue)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value)
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onModify(textareaValue)
    closeForm()
  }

  return (
    <Form onSubmit={onSubmit}>
      <FlexItemsCenter>
        <NameSpan>{name}</NameSpan>
      </FlexItemsCenter>
      <StyledTextarea value={textareaValue} onChange={handleChange} />
      <StyledButton disabled={!textareaValue}>답변 완료</StyledButton>
    </Form>
  )
}
