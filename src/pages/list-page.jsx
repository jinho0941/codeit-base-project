// 지석님 작성 페이지
import { styled, createGlobalStyle } from "styled-components";
import Header from "../component/list/Header";
import Title from "../component/list/Title";
import CardList from "../component/list/CardList";
import Dropdown from "../component/list/Dropdown";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    background-color: #f9f9f9;
    box-sizing : border-box;
    margin : 0;
    padding : 0;
  }`;

const Body = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 100px;
  padding-right: 100px;

  @media (min-width: 1200px) {
    max-width: 1200px;
    width: 100%;
  }
  @media (max-width: 1124px) {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;
const SectionWrapper = styled.div`
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

function ListPage() {
  const options = ["최신순", "이름순"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      <GlobalStyle />
      <Body>
        <Header />
        <SectionWrapper>
          <Title />
          <Dropdown
            options={options}
            selectedOption={selectedOption}
            onChange={setSelectedOption}
          />
        </SectionWrapper>
        <CardList selectedOption={selectedOption} />
      </Body>
    </>
  );
}

export default ListPage;
