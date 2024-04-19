import styled from "styled-components";
import api from "../../utils/api";

const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 35px;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  border: none;
  background: var(--Brown-40, #542f1a);
  color: var(--Grayscale-10, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

function Delete({ answerId }) {
  const deleteAll = async () => {
    try {
      await api.delete(`answers/${answerId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return <Button onClick={deleteAll}>삭제하기</Button>;
}

export default Delete;
