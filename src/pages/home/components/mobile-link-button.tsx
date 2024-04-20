import { FaArrowRight } from 'react-icons/fa'
import { Button } from '../../../components/ui/button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
  margin-top: 2.5rem; /* mt-10 */
  display: none; /* hidden */
  vertical-align: middle; /* align-middle */

  /* Responsive Styles */
  @media (min-width: 640px) {
    display: none; /* sm:hidden */
  }
`

const StyledArrowRight = styled(FaArrowRight)`
  margin-left: 0.125rem; /* ml-2 */
`

export const MobileLinkButton = () => {
  return (
    <StyledDiv>
      <Link to='/list'>
        <Button outline rounded='lg' size='sm'>
          질문하러 가기 <StyledArrowRight />
        </Button>
      </Link>
    </StyledDiv>
  )
}
