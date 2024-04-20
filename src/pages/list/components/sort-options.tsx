import { useState } from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  outline: none; /* outline-none */
  border: 1px solid black; /* border */
  border-radius: 0.375rem; /* rounded-md */
  padding: 0.5rem; /* p-2 */
`

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
    <StyledSelect value={selectedValue} onChange={handleChange}>
      <option value='latest'>최신순</option>
      <option value='name'>이름순</option>
    </StyledSelect>
  )
}
