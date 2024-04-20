import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

type Props = {
  onNameSortClick: () => void
  onDateSortClick: () => void
}

export const Header = ({ onNameSortClick, onDateSortClick }: Props) => {
  const navigation = useNavigate()
  const [selectedValue, setSelectedValue] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value)
    if (event.target.value === 'name') {
      onNameSortClick()
    } else if (event.target.value === 'latest') {
      onDateSortClick()
    }
  }

  const onClick = () => {
    const postId = localStorage.getItem('postId')
    console.log(postId)
    if (!postId) {
      navigation('/')
      return
    }
    navigation(`/post/${postId}/answer`)
  }

  return (
    <>
      <div className='flex justify-center sm:justify-between items-center mx-20 py-10'>
        <img src='/logo.png' className='w-[222px]' />
        <button
          onClick={onClick}
          className='sm:flex hidden border border-amber-900 bg-amber-700/10 text-amber-900 px-4 py-3 items-center rounded-lg'
        >
          <span>답변하러 가기</span>
          <FaArrowRight className='inline ml-2' />
        </button>
      </div>
      <div className='sm:hidden flex justify-center'>
        <button className='flex border border-amber-900 bg-amber-700/10 text-amber-900 px-3 py-2 items-center rounded-lg'>
          <span>답변하러 가기</span>
          <FaArrowRight className='inline ml-2' />
        </button>
      </div>
      <div className='sm:mt-0 mt-10 flex sm:flex-col sm:justify-center justify-between items-center gap-y-10 mx-10'>
        <h1 className='sm:text-5xl text-2xl '>누구에게 질문할까요?</h1>
        <select
          value={selectedValue}
          onChange={handleChange}
          className='outline-none border rounded-md border-black p-2'
        >
          <option value='latest'>최신순</option>
          <option value='name'>이름순</option>
        </select>
      </div>
    </>
  )
}
