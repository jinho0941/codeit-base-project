import styled from "styled-components";
import { useState } from "react";

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const TextArea = styled.textarea`
  font-size: 16px;
  display: flex;
  padding: 12px 24px;
  border-radius: 8px;
  width: 560px;
  height: 186px;
  overflow-y: hidden;
  resize: none;
  background: var(--Grayscale-20, #f9f9f9);
  border: 1px solid var(--Brown-40, #542f1a);
  outline: 1px solid var(--Brown-40, #542f1a);
`;

const NotModifyButton = styled.button`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  width: 560px;
  gap: 8px;
  font-size: 16px;
  color: var(--Grayscale-10, #fff);
  background-color: var(--Brown-30, #c7bbb5);
  border-radius: 8px;
  border: none;
`;

const ModifyDoneButton = styled.button`
  cursor: pointer;
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 560px;
  gap: 8px;
  font-size: 16px;
  color: var(--Grayscale-10, #fff);
  background: var(--Brown-40, #542f1a);
  border-radius: 8px;
  border: none;
`;

function Modifying() {
  const [inputContents, setInputContents] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputContents(text);
    setIsButtonActive(text.trim().length > 0);
  };

  const handleButtonClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <AnswerContainer>
        {isEditing ? (
          <>
            <TextArea
              value={inputContents}
              onChange={handleInputChange}
              placeholder="답변을 입력해주세요"
            />
            {isButtonActive ? (
              <ModifyDoneButton onClick={handleButtonClick}>
                수정완료
              </ModifyDoneButton>
            ) : (
              <NotModifyButton disabled>수정완료</NotModifyButton>
            )}
          </>
        ) : (
          <div>{inputContents}</div>
        )}
      </AnswerContainer>
    </>
  );
}

export default Modifying;
