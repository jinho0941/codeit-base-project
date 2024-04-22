import { useState } from 'react'

export const Answer = ({ name, img, createdAt, content, onAnswerModify }) => {
  const [isModify, setIsModify] = useState(false)
  const [text, setText] = useState(content)
  const handleChange = (event) => {
    setText(event.target.value)
  }

  const onModify = () => {
    setIsModify(false)
    onAnswerModify(text)
  }

  return (
    <div>
      <h1>답변</h1>
      <img src={img} alt='img' />
      <span>{name}</span>
      <span>{createdAt}</span>
      <div>{content}</div>
      <button onClick={() => setIsModify(true)}>수정하기</button>
      {isModify && (
        <div>
          <input value={text} onChange={handleChange} />
          <button onClick={onModify}>수정완료</button>
        </div>
      )}
    </div>
  )
}
