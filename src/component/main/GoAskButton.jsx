import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arrowRight from "../../images/arrow-right.svg";

const StyledLink = styled(Link)`
  width: 161px;
  height: 46px;
  border-radius: 8px;
  background: #f5f1ee;
  color: #542f1a;
  font-size: 16px;
  border: 1px solid #542f1a;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 45px;
  margin-right: 291px;
  cursor: pointer; // 커서를 포인터로 설정하여 링크처럼 보이게 함
  @media (max-width: 767px) {
    width: 126px;
    height: 34px;
    margin-right: 0;
  }
`;

function GoAskButton() {
  return (
    <StyledLink to="/list">
      질문하러 가기
      <img src={arrowRight} alt="Arrow Right" />
    </StyledLink>
  );
}
export default GoAskButton;
