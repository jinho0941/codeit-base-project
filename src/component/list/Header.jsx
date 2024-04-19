import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/list/logo.svg";

const HeaderSection = styled.header`
  margin: 40px 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1124px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;
const StyledLogoImg = styled.img`
  width: 146px;
  height: 57px;
`;
const StyledAnswerLinkButton = styled.button`
  background-color: #f5f1ee;
  color: #542f1a;
  cursor: pointer;
  width: 160px;
  height: 46px;
  border-radius: 8px;
  border: 1px solid #542f1a;
  padding: 12px 24px;

  @media (max-width: 767px) {
    width: 127px;
    height: 34px;
    padding: 8px 12px;
  }
`;
function HeaderContainer() {
  const navigate = useNavigate();

  const handleAnsewerButtonClick = () => {
    const storedId = localStorage.getItem("questionId");
    if (storedId) {
      navigate(`/post/${storedId}/answer`);
    } else {
      navigate("/");
    }
  };

  return (
    <HeaderSection>
      <Link to="/">
        <StyledLogoImg src={logo} alt="openmind 로고" />
      </Link>
      <StyledAnswerLinkButton onClick={handleAnsewerButtonClick}>
        답변하러가기 →
      </StyledAnswerLinkButton>
    </HeaderSection>
  );
}

export default HeaderContainer;
