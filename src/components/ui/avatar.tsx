type Props = {
  imgUrl: string
  size?: 'sm' | 'lg' | 'xl' | '2xl'
}

export const Avatar = ({ imgUrl, size }: Props) => {
  let dynamicStyle = {}
  switch (size) {
    case 'sm':
      dynamicStyle = { height: '2rem', width: '2rem' }
      break
    case 'lg':
      dynamicStyle = { height: '3.75rem', width: '3.75rem' }
      break
    case 'xl':
      dynamicStyle = { height: '4.5rem', width: '4.5rem' }
      break
    case '2xl':
      dynamicStyle = { height: '5rem', width: '5rem' }
      break
    default:
      dynamicStyle = { height: '3.5rem', width: '3.5rem' }
      break
  }
  return (
    <div
      className={`h-14 w-14 
      ${size === 'sm' && 'h-8 w-8'}
      ${size === 'lg' && 'h-18 w-18'}
      ${size === 'xl' && 'h-24 w-24'}
      ${size === '2xl' && 'h-32 w-32'}
      `}
    >
      <img
        src={imgUrl}
        alt='avatar'
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
    </div>
  )
}
