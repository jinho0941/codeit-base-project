import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  height: 22px;
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
  cursor: pointer;
  @media (max-width: 767px) {
    width: 257px;
  }
`;

function ReceiveQuestionForm() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://openmind-api.vercel.app/5-3/subjects/",
        { name }
      );
      const feedId = response.data.id;
      navigate(`/post/${feedId}/answer`);
    } catch (error) {
      console.error("Error creating feed:", error);
      alert("Failed to create feed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <InputContainer>
          <img src={personIcon} alt="Person Icon" />
          <StyledInput
            type="text"
            placeholder="이름을 입력하세요."
            value={name}
            onChange={handleInputChange}
          />
        </InputContainer>
        <StyledButton type="submit">질문 받기</StyledButton>
      </FormContainer>
    </form>
  );
}

export default ReceiveQuestionForm;
