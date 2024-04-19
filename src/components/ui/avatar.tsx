type Props = {
  imgUrl: string
  size?: 'sm' | 'lg' | 'xl' | '2xl'
}

export const Avatar = ({ imgUrl, size }: Props) => {
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
        className='w-full h-full object-cover rounded-full'
      />
    </div>
  )
}
