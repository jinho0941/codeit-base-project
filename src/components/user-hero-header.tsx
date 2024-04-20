import styled from 'styled-components'
import { Logo } from './logo'
import { Avatar } from './ui/avatar'
import { Skeleton } from './ui/skeleton'

const RelativeDiv = styled.div`
  position: relative;
`
const AbsoluteDiv = styled.div`
  position: absolute;
  left: 44%;
  transform: translateX(-50%);
  width: 200px;
  top: 33.33%;
  transform: translateY(-50%);
  width: 200px;

  @media (min-width: 640px) {
    width: 250px;
  }
`

const Image = styled.img`
  object-fit: cover;
  height: 300px;
  width: 100%;
`

const AbsoluteDiv2 = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -10px;
`

const FlexContainer = styled.div`
  padding-top: 3.5rem; /* 14/4 = 3.5rem */
  display: flex;
  justify-content: center;
`

const Heading = styled.h1`
  font-size: 1.875rem; /* 3xl에 해당하는 크기 */
`

type Props = {
  imgUrl: string | undefined
  name: string | undefined
}

export const UserHeroHeader = ({ imgUrl, name }: Props) => {
  return (
    <header>
      <RelativeDiv>
        <AbsoluteDiv>
          <Logo />
        </AbsoluteDiv>
        <Image src='/pb.png' alt='hero' />
        <AbsoluteDiv2>
          {!imgUrl ? (
            <Skeleton rounded='full' width={122} height={122} />
          ) : (
            <Avatar imgUrl={imgUrl} size='2xl' />
          )}
        </AbsoluteDiv2>
      </RelativeDiv>
      <FlexContainer>
        {!name ? (
          <Skeleton rounded='xl' width={200} height={36} />
        ) : (
          <Heading>{name}</Heading>
        )}
      </FlexContainer>
    </header>
  )
}
