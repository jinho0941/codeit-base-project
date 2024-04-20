import { FaArrowRight } from 'react-icons/fa'
import { Logo } from '../../../components/logo'
import { Button } from '../../../components/ui/button'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column; /* flex-col */
  gap: 1.25rem; /* gap-y-5 */
  justify-content: space-between; /* justify-between */
  align-items: center; /* items-center */
  padding-top: 1.25rem; /* pt-5 */

  /* Responsive Styles */
  @media (min-width: 640px) {
    flex-direction: row; /* sm:flex-row */
  }
`
const StyledDiv = styled.div`
  width: 12.5rem; /* w-[200px] */
`

type Props = {
  onLinkClick: () => void
}

export const Header = ({ onLinkClick }: Props) => {
  return (
    <StyledHeader>
      <StyledDiv>
        <Logo />
      </StyledDiv>
      <Button onClick={onLinkClick} width={200} outline rounded='lg'>
        답변하로 가기 <FaArrowRight className='ml-2' />
      </Button>
    </StyledHeader>
  )
}
