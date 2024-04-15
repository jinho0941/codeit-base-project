// 수연님 작성 페이지
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import styles from "../component/answer/MainStyle.module.css";

// 이미지 경로
// import Image2 from "../component/answer/image/Image2.svg";
// import logo from "../component/answer/image/logo.svg";
// import Ellipse1 from "../component/answer/image/Ellipse1.svg";

//컴포넌트 경로
import Main from "../component/answer/main";
import DeleteButton from "../component/answer/deleteButton";
// import ModifyMenu from "../component/answer/modifymenu";
import Modifying from "../component/answer/modifying";
// import DeleteAnswer from "../component/answer/delete-answer";

const AnswerPage = () => {
  const params = useParams();
  const postId = params.postId;

  console.log(postId);

  const PostionDeleteButton = styled.div`
    position: absolute;
    left: 70%;
    top: 50%;
    transform: translate(-50%, -50%);
  `;
  const Questions = styled.div`
    display: inline-flex;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    border: 1px solid var(--browm30);
    background: var(--brown10);
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
  `;

  return (
    <>
      <Main />
      <PostionDeleteButton>
        <DeleteButton />
      </PostionDeleteButton>
      <Questions>
        <div>3개의 질문이 있습니다</div>
        <Modifying />
      </Questions>
    </>
  );
};

export default AnswerPage;
