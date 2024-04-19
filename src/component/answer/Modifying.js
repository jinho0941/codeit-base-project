import styled from "styled-components";
import { useState, useEffect } from "react";
import api from "../../utils/api";

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

const KebabButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
`;

const MenuContainer = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div`
  top: 30px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const MenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 12px 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

function Modifying({ id, answerId }) {
  const [inputContents, setInputContents] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isEditing, setIsEditing] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (answerId) {
      getAnswer();
    }
  }, [answerId]);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputContents(text);
    setIsButtonActive(text.trim().length > 0);
  };

  const handleButtonClick = async () => {
    try {
      const response = await api.post(`/questions/${id}/answers/`, {
        content: inputContents,
        isRejected: true,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsEditing(false);
    setShowAnswer(true);
  };

  const handleModifyClick = () => {
    setIsEditing(true);
  };

  const handleKebabClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleModifyMenuClick = () => {
    setIsEditing(true);
    setIsMenuOpen(false);
  };

  const getAnswer = async () => {
    try {
      const response = await api.get(`/answers/${answerId}/`);
      setInputContents(response.data.content);
      setIsButtonActive(true);
      setShowAnswer(response.data.isRejected);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
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
        ) : null}
        {showAnswer && !isEditing && <div>{inputContents}</div>}
        {!isEditing && (
          <MenuContainer>
            <KebabButton onClick={handleKebabClick}>...</KebabButton>
            {isMenuOpen && (
              <DropdownMenu>
                <MenuItem onClick={handleModifyMenuClick}>수정하기</MenuItem>
              </DropdownMenu>
            )}
          </MenuContainer>
        )}
      </AnswerContainer>
    </>
  );
}

export default Modifying;
