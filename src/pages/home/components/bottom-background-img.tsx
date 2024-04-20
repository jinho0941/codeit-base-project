import styled from 'styled-components'

const BottomBackgroundImgWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1111px; /* Tailwind CSS 클래스를 직접 스타일로 변경 */
`

export const BottomBackgroundImg = () => {
  return (
    <BottomBackgroundImgWrapper>
      <img src='/bottom.png' alt='bottom-img' />
    </BottomBackgroundImgWrapper>
  )
}
