import { createGlobalStyle } from "styled-components";
import Container from "../component/answer/Container";
import Background from "../component/answer/Background";
import StyledProfile from "../component/answer/StyledProfile";
import ContentsContainer from "../component/answer/ContentsContainer";
import { useEffect, useState } from "react";
import { getSubject } from "../api/answer/answer";
import Delete from "../component/answer/DeleteButton";
import { useParams } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

function AnswerPage() {
  const [profile, setProfile] = useState(null);
  const params = useParams();

  const handleLoadProfile = async () => {
    const result = await getSubject(params.postId);

    return result;
  };

  useEffect(() => {
    handleLoadProfile()
      .then((r) => {
        const { name, imageSource } = r.data;

        setProfile({
          name,
          imageSource,
        });
      })
      .catch((error) => console.error(error));
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  const handleDelete = async () => {
    setContents([]);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Background />
        <StyledProfile profile={profile} />
        <Delete onDelete={handleDelete} />
        <ContentsContainer profile={profile} id={params.postId} />
      </Container>
    </>
  );
}

export default AnswerPage;
