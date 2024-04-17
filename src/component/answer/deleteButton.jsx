import styled from "styled-components";

import { deleteAnswer } from "../../api/answer/answer";

function DeleteButton() {
  const Button = styled.button`
    cursor: pointer;
    width: 100px;
    height: 35px;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    border: none;
    background: var(--brown40);
    color: var(--grayScale10);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  `;

  // 질문한 사람의 아이디를 삭제하도록
  return <Button onClick={deleteAnswer}>삭제하기</Button>;
}

export default DeleteButton;
