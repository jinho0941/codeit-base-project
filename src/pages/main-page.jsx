import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import Image2 from "../Image2.svg";
import GoAskButton from "../component/main/GoAskButton.jsx";
import RevceiveQuestionForm from "../component/main/ReceiveQuestionForm.jsx";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const Button = styled.button`
//   margin: 10px;
//   padding: 8px 16px;
//   font-size: 16px;
//   border: none;
//   border-radius: 4px;
//   background-color: #007bff;
//   color: #fff;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

const MainPage = () => {
  return (
    <CenteredContainer>
      <Container>
        <GoAskButton />
        <Link to="/main-page">
          <img alt="logo" src={logo} />
        </Link>
        <RevceiveQuestionForm />
        <img alt="image2" src={Image2} />
      </Container>
    </CenteredContainer>
  );
};

export default MainPage;
