import styled from "styled-components";
import React from "react";
import GoAskButton from "./GoAskButton";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: right;
  align-items: center;
  top: 0;
  width: 100%;

  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`;

function Header() {
  return (
    <StyledDiv>
      <GoAskButton></GoAskButton>
    </StyledDiv>
  );
}

export default Header;
