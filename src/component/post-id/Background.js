import styled from "styled-components";
import backgroundImg from "../../images/post-id-images/background.svg";
import logoImg from "../../images/post-id-images/logo.svg";

const StyledBackground = styled.div`
  width: 100%;
  position: relative;
`;

const BackgroundImage = styled.div`
  width: 100vw;
  height: 300px;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Logo = styled.img`
  display: inline-block;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Background() {
  return (
    <StyledBackground>
      <BackgroundImage />
      <Logo src={logoImg} alt="logo" />
    </StyledBackground>
  );
}

export default Background;
