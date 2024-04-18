import { createGlobalStyle } from "styled-components";
import Container from "../component/answer/Container";
import Background from "../component/answer/Background";
import StyledProfile from "../component/answer/StyledProfile";
import ContentsContainer from "../component/answer/ContentsContainer";
import { useEffect, useState } from "react";
import { getSubject } from "../api/answer/answer";

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

  const handleLoadProfile = async () => {
    const result = await getSubject();

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

  return (
    <>
      <GlobalStyle />
      <Container>
        <Background />
        <StyledProfile profile={profile} />
        <ContentsContainer profile={profile} />
      </Container>
    </>
  );
}

export default AnswerPage;
