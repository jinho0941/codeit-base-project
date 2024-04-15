import styled from "styled-components";

import DropDown from "./Dropdown";

const TitleSection = styled.div`
  @media (max-width: 767px) {
    gap: 36px;
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 20px;
    text-align: center;
    margin-left: 24px;
    margin-right: 24px;
  }
`;
const Title = styled.p`
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
    white-space: nowrap;
  }
`;
function TitleContainer() {
  return (
    <TitleSection>
      <Title>누구에게 질문할까요?</Title>
      <DropDown />
    </TitleSection>
  );
}

export default TitleContainer;
