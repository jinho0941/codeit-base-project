import styled from 'styled-components'

const StyledHeading = styled.h1`
  font-size: 1.5rem; /* text-xl */

  @media (min-width: 640px) {
    font-size: 1.875rem; /* sm:text-3xl */
  }
`

export const Title = () => {
  return <StyledHeading>누구에게 질문할까요?</StyledHeading>
}
