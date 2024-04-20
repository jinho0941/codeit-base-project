import styled from 'styled-components'

const LinkImage = styled.img`
  cursor: pointer;
`

export const ShareIcons = () => {
  return (
    <div className='mt-6 flex gap-x-4'>
      <LinkImage src='/link.png' alt='link' />
      <LinkImage src='/kakao.png' alt='link' />
      <LinkImage src='/facebook.png' alt='link' />
    </div>
  )
}
