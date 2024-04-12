import styled from "styled-components";

const CardList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, max(220px));
  grid-template-rows: repeat(2, 186px);
  gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 220px);
    grid-template-rows: repeat(4, 186px);
  }
`;
const Card = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #818181;
  padding: 20px;
  color: #000000;
  max-width: 220px;
`;

function CardContainer() {
  return (
    <CardList>
      <Card>a</Card>
      <Card>b</Card>
      <Card>c</Card>
      <Card>d</Card>
      <Card>e</Card>
      <Card>f</Card>
      <Card>g</Card>
      <Card>h</Card>
    </CardList>
  );
}

export default CardContainer;
