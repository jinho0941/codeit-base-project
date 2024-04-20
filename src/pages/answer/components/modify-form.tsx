import { useState } from 'react'

type Props = {
  name: string
  initialValue: string
  onModify: (content: string) => void
  closeForm: () => void
}

export const ModifyForm = ({
  name,
  initialValue,
  onModify,
  closeForm,
}: Props) => {
  const [textareaValue, setTextareaValue] = useState<string>(initialValue)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value)
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onModify(textareaValue)
    closeForm()
  }

  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col ml-auto rounded-2xl w-full z-20 pl-20'
    >
      <div className='mt-10 flex items-center'>
        <span className='ml-2 font-semibold'>{name}</span>
      </div>
      <textarea
        className='mt-5 bg-slate-100 h-40 resize-none border-none p-2 outline-none rounded-xl'
        value={textareaValue}
        onChange={handleChange}
      />
      <button
        type='submit'
        disabled={!textareaValue}
        className='mt-3 mb-8 w-full bg-amber-900 p-4 text-white rounded-xl disabled:bg-amber-900/30 transition duration-200'
      >
        답변 완료
      </button>
    </form>
  )
}
