import styled from "styled-components";
import backgroundImg from "../../images/post-id-images/background.svg";
import logoImg from "../../images/post-id-images/logo.svg";

const Logo = styled.img`
  position: absolute;
  margin-top: 50px;
  width: 170px;
  height: 67px;
`;

function Background() {
  return (
    <>
      <img src={backgroundImg} alt="background" width="100%" />
      <Logo src={logoImg} alt="logo" />
    </>
  );
}

export default Background;
