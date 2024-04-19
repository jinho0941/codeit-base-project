import { Logo } from './logo'
import { Avatar } from './ui/avatar'
import { Skeleton } from './ui/skeleton'

type Props = {
  imgUrl: string | undefined
  name: string | undefined
}

export const UserHeroHeader = ({ imgUrl, name }: Props) => {
  return (
    <header>
      <div className='relative'>
        <div className='absolute left-1/2 transform -translate-x-1/2 sm:w-[250px] w-[200px] top-1/3 -translate-y-1/2'>
          <Logo />
        </div>
        <img
          src='/pb.png'
          alt='hero'
          className='object-cover h-[300px] w-full'
        />
        <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-10'>
          {!imgUrl ? (
            <Skeleton rounded='full' width={122} height={122} />
          ) : (
            <Avatar imgUrl={imgUrl} size='2xl' />
          )}
        </div>
      </div>
      <div className='pt-14 flex justify-center'>
        {!name ? (
          <Skeleton rounded='xl' width={200} height={36} />
        ) : (
          <h1 className='text-3xl'>{name}</h1>
        )}
      </div>
    </header>
  )
}
