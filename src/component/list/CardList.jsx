import styled from "styled-components";
import Cards from "./Card.jsx";
import { useEffect, useState } from "react";
import api from "../../utils/api.js";
const StyledCardSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCardList = styled.div`
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

function CardList({ selectedOption }) {
  const [data, setData] = useState(null);
  const limit = 8;
  const offset = 0;

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(
        `/subjects/?limit=${limit}&offset=${offset}`
      );
      setData(response.data);
    }
    fetchData();
  }, [selectedOption]);

  return (
    <StyledCardSection>
      <StyledCardList>
        {data &&
          data.results &&
          data.results
            .sort((a, b) => {
              if (selectedOption === "최신순") {
                return new Date(b.createdAt) - new Date(a.createdAt);
              } else if (selectedOption === "이름순") {
                return a.name.localeCompare(b.name);
              } else {
                return 0;
              }
            })
            .map((item) => <Cards key={item.id} item={item} />)}
      </StyledCardList>
    </StyledCardSection>
  );
}

export default CardList;
