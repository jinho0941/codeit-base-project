import { useState } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  border-radius: 1rem;
  width: 100%;
  z-index: 20;
  padding-left: 5rem;
`

const StyledDiv = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
`

const StyledSpan = styled.span`
  margin-left: 0.5rem;
  font-weight: 600;
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
    background-color: rgba(111, 111, 22, 0.3);
  }
  transition: background-color 0.2s;
`

type Props = {
  name: string
  onCreate: (value: string) => void
}

export const AnswerForm = ({ name, onCreate }: Props) => {
  const [textareaValue, setTextareaValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value)
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onCreate(textareaValue)
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledDiv>
        <StyledSpan>{name}</StyledSpan>
      </StyledDiv>
      <StyledTextarea
        placeholder='질문을 입력해주세요'
        value={textareaValue}
        onChange={handleChange}
      />
      <StyledButton type='submit' disabled={!textareaValue}>
        답변 완료
      </StyledButton>
    </StyledForm>
  )
}
