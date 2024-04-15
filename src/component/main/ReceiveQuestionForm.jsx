import React from "react";
import styled from "styled-components";
import personIcon from "../../images/Person.svg";

const FormContainer = styled.div`
  width: 400px;
  height: 172px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ffffff;
  flex-direction: column;
  background-color: #ffffff;
  margin-top: 32px;

  @media (max-width: 767px) {
    width: 305px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 336px;
  height: 46px;
  justify-content: center;
  border: 1px solid #818181;
  border-radius: 8px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    width: 257px;
  }
`;

const StyledInput = styled.input`
  width: 280px;
  heigt: 22px;
  font-size: 16px;
  font-weight: 400;
  color: #818181;
  margin-left: 10px;
  border: 0px;
`;

const StyledButton = styled.button`
  width: 336px;
  height: 46px;
  border: 0px;
  background-color: #542f1a;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 24px;
  border-radius: 8px;
  @media (max-width: 767px) {
    width: 257px;
`;

function RevceiveQuestionForm() {
  return (
    <form>
      <FormContainer>
        <InputContainer>
          <img src={personIcon} alt="사람 아이콘" />
          <StyledInput type="text" placeholder="이름을 입력하세요." />
        </InputContainer>
        <StyledButton>질문 받기</StyledButton>
      </FormContainer>
    </form>
  );
}
export default RevceiveQuestionForm;
