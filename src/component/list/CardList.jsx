import styled from "styled-components";
import Cards from "./Card.jsx";
import { useEffect, useState } from "react";
import api from "../../utils/api.js";
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

function CardListContainer() {
  const [data, setData] = useState(null);
  const limit = 8;
  const offset = 0;
  useEffect(() => {
    async function fetchData() {
      const response = await api.get(
        `/subjects/?limit=${limit}&offset=${offset}`
      );
      console.log(response.data);
      setData(response.data);
    }
    fetchData();
  }, []);
  console.log(data);

  return (
    <CardSection>
      <CardList>
        {data && data.results ? (
          data.results.map((item) => <Cards key={item.id} item={item} />)
        ) : (
          <div>Loading...</div>
        )}
      </CardList>
    </CardSection>
  );
}

export default CardListContainer;
