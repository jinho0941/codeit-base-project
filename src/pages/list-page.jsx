// 지석님 작성 페이지
import { styled, createGlobalStyle } from "styled-components";
import Header from "../component/list/Header";
import Title from "../component/list/Title";
import Cards from "../component/list/Cards";

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
  padding-left: 130px;
  padding-right: 130px;

  @media (min-width: 1200px) {
    max-width: 1200px;
    width: 100%;
  }
  @media (max-width: 767px) {
    padding: 0 24px;
  }
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

function ListPage() {
  return (
    <>
      <GlobalStyle />
      <Body>
        <Header />
        <Title />
        <Main>
          <Cards />
        </Main>
      </Body>
    </>
  );
}

export default ListPage;
