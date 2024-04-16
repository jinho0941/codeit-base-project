import styled from "styled-components";
import Cards from "./Card.jsx";

const CardSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardList = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 220px);
  grid-template-rows: repeat(2, 186px);
  gap: 20px;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(4, minmax(186px, 220px));
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (max-width: 982px) {
    grid-template-columns: repeat(3, 220px);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 220px);
    grid-template-rows: repeat(3, 186px);
    padding-left: 24px;
    padding-right: 24px;
  }
`;
// const Card = styled.div`
//   background-color: #ffffff;
//   border-radius: 16px;
//   border: 1px solid #818181;
//   padding: 20px;
//   color: #000000;

//   @media (max-width: 982px) {
//     display: ${(props) => (props.$hideonsmallscreen ? "none" : "block")};
//   }
// `;

function CardListContainer({ data }) {
  console.log(data);
  return (
    <CardSection>
      <CardList>
        {data && data.results ? (
          data.results.map((item) => <Cards key={item.id} item={item} />)
        ) : (
          // 데이터가 존재하지 않을 때에는 로딩 상태를 보여줄 수 있습니다.
          <div>Loading...</div>
        )}
      </CardList>
    </CardSection>
  );
}

export default CardListContainer;
