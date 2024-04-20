import styled from 'styled-components'

const StyledDiv = styled.div`
  position: absolute;
  top: 28px;
  left: 16px;
`

const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
`

const StyledButton = styled.button`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  transition: all 0.3s;
  &:hover {
    background-color: #d1d5db;
  }
`

const StyledDivider = styled.div`
  width: 100%;
  border-top: 1px solid #e5e7eb; /* Tailwind CSS의 border-t 클래스 색상을 가져와야 합니다. */
`

type Props = {
  onDelete: () => void
  onModifyOpen: () => void
}

export const AnswerActionMenu = ({ onDelete, onModifyOpen }: Props) => {
  return (
    <StyledDiv>
      <StyledDiv2>
        <StyledButton onClick={onModifyOpen}>수정하기</StyledButton>
        <StyledDivider />
        <StyledButton onClick={onDelete}>삭제하기</StyledButton>
      </StyledDiv2>
    </StyledDiv>
  )
}
