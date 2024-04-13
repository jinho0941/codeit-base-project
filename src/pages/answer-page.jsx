// 수민님 작성 페이지
import { useParams } from "react-router-dom";

const AnswerPage = () => {
  const params = useParams();
  const postId = params.postId;

  console.log(postId);

  return <div>answer page</div>;
};

export default AnswerPage;
