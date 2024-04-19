type Props = {
  width?: number
  height?: number
  rounded?: 'none' | 'md' | 'lg' | 'xl' | 'full'
}

export const Skeleton = ({ width, height, rounded }: Props) => {
  return (
    <div
      className={`bg-gray-200 animate-pulse 
      ${rounded === 'none' && 'rounded-none'}
      ${rounded === 'md' && 'rounded-md'}
      ${rounded === 'xl' && 'rounded-xl'}
      ${rounded === 'lg' && 'rounded-lg'}
      ${rounded === 'full' && 'rounded-full'}
      `}
      style={{ width, height }}
    />
  )
}
