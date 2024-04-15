import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import Image2 from "../images/Image2.svg";
import RevceiveQuestionForm from "../component/main/ReceiveQuestionForm.jsx";
import Header from "../component/main/Header.jsx";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  height: 100vh;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url("${Image2}");
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: bottom;

  @media (max-width: 767px) {
    background-size: contain;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 0px;
`;

const StyledLogoImage = styled.img`
  width: 456px;
  height: auto;

  @media (max-width: 767px) {
    width: 248px;
  }
`;

const MainPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <CenteredContainer>
        {isMobile ? (
          <Container>
            <StyledLogoImage alt="logo" src={logo} />
            <Header />
            <RevceiveQuestionForm />
          </Container>
        ) : (
          <>
            <Header />
            <Container>
              <StyledLogoImage alt="logo" src={logo} />
              <RevceiveQuestionForm />
            </Container>
          </>
        )}
      </CenteredContainer>
    </>
  );
};

export default MainPage;
