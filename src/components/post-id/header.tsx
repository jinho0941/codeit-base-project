type Props = {
  img: string
}

export const Header = ({ img }: Props) => {
  return (
    <div className='relative h-[400px]'>
      <img src='/pb.png' alt='pb' className='object-cover h-[400px] w-full' />
      <img
        src='/logo.png'
        alt='logo'
        className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[333px]'
      />
      <img
        src={img}
        className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 rounded-full md:w-[155px] w-[111px]'
      />
    </div>
  )
}
