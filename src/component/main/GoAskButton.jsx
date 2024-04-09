import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arrowRight from "../../arrow-right.svg";

const StyledButton = styled.button`
  width: 161px;
  height: 46px;
  padding: 12px 24px;
  border-radius: 8px;
  background: #f5f1ee;
  color: #542f1a;
  font-size: 16px;
  border: 1px solid #542f1a;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function GoAskButton() {
  return (
    <StyledLink to="/list">
      <StyledButton>
        질문하러 가기
        <img src={arrowRight} />
      </StyledButton>
    </StyledLink>
  );
}
export default GoAskButton;
