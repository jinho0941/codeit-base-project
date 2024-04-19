import { useState } from 'react'

type Props = {
  sortSubjectsByDate: () => void
  sortSubjectsByName: () => void
}

export const SortOptions = ({
  sortSubjectsByDate,
  sortSubjectsByName,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value)
    if (event.target.value === 'name') {
      sortSubjectsByName()
    } else if (event.target.value === 'latest') {
      sortSubjectsByDate()
    }
  }

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      className='outline-none border rounded-md border-black p-2'
    >
      <option value='latest'>최신순</option>
      <option value='name'>이름순</option>
    </select>
  )
}
