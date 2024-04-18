import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import Container from "../component/post-id/Container";
import Background from "../component/post-id/Background";
import StyledProfile from "../component/post-id/StyledProfile";
import ContentsContainer from "../component/post-id/ContentsContainer";
import AddQuestion from "../component/post-id/AddQuestion";
import QuestionModal from "../component/post-id/QuestionModal";
import { getSubject } from "../api/post-id/post-api";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

function App() {
  const [profile, setProfile] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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

  const handleModal = () =>
    modalVisible ? setModalVisible(false) : setModalVisible(true);

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
      <AddQuestion onModalClick={handleModal} />
      {modalVisible ? (
        <QuestionModal
          modalVisible={modalVisible}
          onModalState={setModalVisible}
          profile={profile}
        />
      ) : null}
    </>
  );
}

export default App;
