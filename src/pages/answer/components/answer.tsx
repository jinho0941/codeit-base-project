import { GoKebabHorizontal } from 'react-icons/go'
import { Avatar } from '../../../components/ui/avatar'
import { formatDate } from '../../../utils/date'
import { useState } from 'react'
import { AnswerActionMenu } from './answer-action-menu'
import { ModifyForm } from './modify-form'
import styled from 'styled-components'

const FlexContainer = styled.div`
  margin-top: 2rem;
  display: flex;
`

const FlexColumnContainer = styled.div`
  margin-left: 1.25rem;
  display: flex;
  flex-direction: column;
`

const FlexItemsCenter = styled.div`
  display: flex;
  align-items: center;
`

const Heading2 = styled.h2`
  font-size: 1.25rem;
`

const DateSpan = styled.span`
  margin-left: 0.5rem;
  font-size: 0.875rem;
`

const RelativeDiv = styled.div`
  position: relative;
`

const StyledButton = styled.button`
  margin-left: 0.25rem;
  padding: 0.75rem;
  &:hover {
    background-color: #cbd5e1;
  }
  border-radius: 50%;
`
const ContentParagraph = styled.p`
  margin-top: 0.5rem;
`

type Props = {
  img: string
  name: string
  createdAt: string
  content: string
  onDelete: () => void
  onModify: (content: string) => void
}

export const Answer = ({
  img,
  name,
  createdAt,
  content,
  onDelete,
  onModify,
}: Props) => {
  const date = formatDate(createdAt)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isModifyClicked, setIsModifyClicked] = useState(false)

  const onModifyOpen = () => {
    setIsModifyClicked(true)
  }

  const onClose = () => {
    setIsModifyClicked(false)
    setIsOpenMenu(false)
  }

  return (
    <>
      {isModifyClicked ? (
        <ModifyForm
          initialValue={content}
          name={name}
          onModify={onModify}
          closeForm={onClose}
        />
      ) : (
        <FlexContainer>
          <Avatar imgUrl={img} />
          <FlexColumnContainer>
            <FlexItemsCenter>
              <Heading2>{name}</Heading2>
              <DateSpan>{date}</DateSpan>
              <RelativeDiv>
                <StyledButton onClick={() => setIsOpenMenu((value) => !value)}>
                  <GoKebabHorizontal />
                </StyledButton>
                {isOpenMenu && (
                  <AnswerActionMenu
                    onDelete={onDelete}
                    onModifyOpen={onModifyOpen}
                  />
                )}
              </RelativeDiv>
            </FlexItemsCenter>
            <ContentParagraph>{content}</ContentParagraph>
          </FlexColumnContainer>
        </FlexContainer>
      )}
    </>
  )
}
