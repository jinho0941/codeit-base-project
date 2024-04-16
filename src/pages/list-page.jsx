// 지석님 작성 페이지
import { styled, createGlobalStyle } from "styled-components";
import Header from "../component/list/Header";
import Title from "../component/list/Title";
import CardContainer from "../component/list/CardList";
// import Pagenation from "../component/list/Pagenation";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing : border-box;
    background-color : #F9F9F9;
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

function ListPage() {
  return (
    <>
      <GlobalStyle />
      <Body>
        <Header />
        <Title />
        <CardContainer />
        {/* <Pagenation /> */}
      </Body>
    </>
  );
}

export default ListPage;
