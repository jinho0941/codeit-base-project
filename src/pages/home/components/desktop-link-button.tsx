import { FaArrowRight } from 'react-icons/fa'
import { Button } from '../../../components/ui/button'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const StyledHeader = styled.header`
  display: none; /* hidden */
  padding-top: 2.5rem; /* pt-10 */
  justify-content: flex-end; /* justify-end */

  /* Responsive Styles */
  @media (min-width: 640px) {
    display: flex; /* sm:flex */
  }

  @media (min-width: 1280px) {
    margin-right: 1.25rem; /* xl:mr-20 */
  }
  margin-right: 0.625rem; /* mr-10 */
`

const StyledArrowRight = styled(FaArrowRight)`
  margin-left: 0.125rem; /* ml-2 */
`

export const DesktopLinkButton = () => {
  return (
    <StyledHeader>
      <Link to='/list'>
        <Button width={200} outline rounded='lg'>
          질문하로가기
          <StyledArrowRight />
        </Button>
      </Link>
    </StyledHeader>
  )
}
