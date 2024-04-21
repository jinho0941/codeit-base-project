import { GoKebabHorizontal } from 'react-icons/go'
import { Avatar } from '../../../components/ui/avatar'
import { formatDate } from '../../../utils/date'
import { useState } from 'react'
import { AnswerActionMenu } from './answer-action-menu'
import { ModifyForm } from './modify-form'

type Props = {
  img: string
  name: string
  createdAt: string
  content: string
  onDelete: () => void
  onModify: (content: string) => void
}

export const Answer = ({
  img,
  name,
  createdAt,
  content,
  onDelete,
  onModify,
}: Props) => {
  const date = formatDate(createdAt)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isModifyClicked, setIsModifyClicked] = useState(false)

  const onModifyOpen = () => {
    setIsModifyClicked(true)
  }

  const onClose = () => {
    setIsModifyClicked(false)
    setIsOpenMenu(false)
  }

  return (
    <>
      {isModifyClicked ? (
        <ModifyForm
          initialValue={content}
          name={name}
          onModify={onModify}
          closeForm={onClose}
        />
      ) : (
        <>
          <div className='mt-8 flex items-center'>
            <Avatar imgUrl={img} size='sm' />
            <h2 className='text-xl ml-3'>{name}</h2>
            <span className='ml-2 text-sm'>{date}</span>
            <div className='relative'>
              <button
                onClick={() => setIsOpenMenu((value) => !value)}
                className='ml-1 p-3 hover:bg-slate-200 rounded-full'
              >
                <GoKebabHorizontal />
              </button>
              {isOpenMenu && (
                <AnswerActionMenu
                  onDelete={onDelete}
                  onModifyOpen={onModifyOpen}
                />
              )}
            </div>
          </div>
          <p className='mt-2 break-words mr-5 p-3'>{content}</p>
        </>
      )}
    </>
  )
}
