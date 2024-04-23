import { useState } from 'react'
import styled from 'styled-components'
import { calculateTimeDiff } from '../post-id/utils'
import More from '../../images/answer/More.svg'

const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 48px;
`

const AnswerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`

const UserName = styled.div`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Actor;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  word-break: break-all;
`

const AnswerCardTerm = styled.div`
  display: flex;
  color: #818181;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`

const KebabButton = styled.img`
  cursor: pointer;

  border: none;
`

const DropdownMenu = styled.div`
  top: 30px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`

const MenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 12px 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f5f5f5;
  }
`

const TextArea = styled.textarea`
  font-size: 16px;
  display: flex;
  padding: 12px 24px;
  border-radius: 8px;
  width: 100%;
  height: 186px;
  overflow-y: hidden;
  resize: none;
  background: var(--Grayscale-20, #f9f9f9);
  border: 1px solid var(--Brown-40, #542f1a);
  outline: 1px solid var(--Brown-40, #542f1a);
`

const ModifyDoneButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 100%;
  gap: 8px;
  font-size: 16px;
  color: var(--Grayscale-10, #fff);
  background: var(--Brown-40, #542f1a);
  border-radius: 8px;
  border: none;
`

export const Answer = ({
  name,
  img,
  createdAt,
  content,
  onAnswerModify,
  isRejected,
}) => {
  const [isModify, setIsModify] = useState(false)
  const [text, setText] = useState(content)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleKebabClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const onModify = () => {
    setIsModify(false)
    onAnswerModify(text)
  }

  const handleModifyClick = () => {
    setIsModify(true)
    setIsMenuOpen(false) // Close the dropdown when '수정하기' is clicked
  }

  return (
    <>
      <UserImage src={img} alt='img' />
      <AnswerContainer>
        <AnswerInfo>
          <UserName>{name}</UserName>
          <AnswerCardTerm>{calculateTimeDiff(createdAt)}</AnswerCardTerm>
          {!isRejected && <KebabButton src={More} onClick={handleKebabClick} />}

          {isMenuOpen && (
            <DropdownMenu>
              <MenuItem onClick={handleModifyClick}>수정하기</MenuItem>
            </DropdownMenu>
          )}
        </AnswerInfo>
        {!isModify && (
          <div style={{ wordBreak: 'break-all' }}>
            {isRejected ? (
              <span style={{ color: 'red' }}>답변거부</span>
            ) : (
              content
            )}
          </div>
        )}
        {isModify && (
          <>
            <TextArea value={text} onChange={handleChange} />
            <ModifyDoneButton onClick={onModify}>수정완료</ModifyDoneButton>
          </>
        )}
      </AnswerContainer>
    </>
  )
}
