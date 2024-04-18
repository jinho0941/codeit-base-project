import styled from "styled-components";

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
  return <Title>누구에게 질문할까요?</Title>;
}

export default TitleContainer;
