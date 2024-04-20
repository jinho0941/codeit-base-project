import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  display: inline-block;
  width: auto;

  @media (min-width: 640px) {
    width: auto; /* sm:w-auto에 해당 */
  }

  @media (max-width: 639px) {
    width: 16.625rem; /* w-[266px]에 해당 */
  }
`

type Props = {
  width?: number
  height?: number
  href?: string
}

export const Logo = ({ href = '/' }: Props) => {
  return (
    <StyledLink to={href}>
      <img src='/logo.png' alt='logo' />
    </StyledLink>
  )
}
