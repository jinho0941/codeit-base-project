import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
  margin-left: auto;
  margin-right: 300px;

  @media only screen and (max-width: 1200px) {
    margin-left: auto;
    margin-right: 32px;
  }

  @media only screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: 24px;
  }
`;

export default Container;
export { ButtonWrapper };
