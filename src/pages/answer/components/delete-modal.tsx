import { GrAlert } from 'react-icons/gr'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../../utils/api'
import { Modal } from '../../../components/ui/modal'
import styled from 'styled-components'

const AbsoluteCenteredDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 1.5rem;
  width: 666px;
  border-radius: 0.75rem;
`

const FlexColumnCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DeleteConfirmationText = styled.div`
  margin-top: 0.75rem;
  font-size: 1.875rem;
  color: #ed1e79;
  font-weight: bold;
`

const AlertIcon = styled(GrAlert)`
  height: 4rem;
  width: 4rem;
  color: #ed1e79;
`

const GridContainer = styled.div`
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 1.25rem;
`

const StyledButton = styled.button`
  padding: 0.75rem;
  border-width: 2px;
  border-radius: 0.75rem;
  &:hover {
    background-color: #e5e7eb;
  }
`

const DeleteButton = styled.button`
  padding: 0.75rem;
  border-width: 2px;
  border-radius: 0.75rem;
  background-color: #ed1e79;
  color: #fff;
  &:hover {
    background-color: #b4004e;
  }
`

type Props = {
  onClose: () => void
}

export const DeleteModal = ({ onClose }: Props) => {
  const params = useParams<{ postId: string }>()
  const postId = params.postId
  const navigation = useNavigate()

  const deletePost = async () => {
    try {
      await api.delete(`/subjects/${postId}/`)
      navigation('/list')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal onClose={onClose}>
      <AbsoluteCenteredDiv>
        <FlexColumnCentered>
          <AlertIcon />
          <DeleteConfirmationText>
            정말 삭제하시겠습니까?
          </DeleteConfirmationText>
        </FlexColumnCentered>
        <GridContainer>
          <StyledButton onClick={onClose}>취소하기</StyledButton>
          <DeleteButton onClick={deletePost}>삭제하기</DeleteButton>
        </GridContainer>
      </AbsoluteCenteredDiv>
    </Modal>
  )
}
