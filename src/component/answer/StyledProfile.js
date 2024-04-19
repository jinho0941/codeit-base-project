import styled from "styled-components";
import linkImg from "../../images/post-id-images/link.svg";
import kakaoImg from "../../images/post-id-images/kakaoImage.svg";
import facebookImg from "../../images/post-id-images/facebookImage.svg";
import { useState } from "react";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -100px;
  width: 170px;
  text-align: center;
  z-index: 3;
`;

const ProfileImage = styled.img`
  width: 150px; /* 초기 크기를 지정합니다. */
  height: 150px;
  border-radius: 50%; /* 동그랗게 만듭니다. */
`;

const ProfileName = styled.div`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 125% */
`;

const ProfileShare = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

const LinkBase = styled.img`
  border-radius: 200px;
  width: 40px;
  padding: 10px;
  cursor: pointer;
`;

const Link = styled(LinkBase)`
  background: #542f1a;
`;

const Kakao = styled(LinkBase)`
  background: #fee500;
`;

const Facebook = styled(LinkBase)`
  background: #1877f2;
`;

const copyToClipBoard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("URL copied to clipboard", text);
    })
    .catch((error) => {
      console.error("Failed to copy URL to clipboard:", error);
    });
};

const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 5px;
  z-index: 1000;
`;

function StyledProfile({ profile }) {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    const url = "http://localhost:3000/";
    copyToClipBoard(url);

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const handleKaKaoClick = () => {
    window.open("https://www.kakaocorp.com/page/");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/?locale=ko_KR");
  };

  return (
    <Profile>
      <ProfileImage src={profile.imageSource} alt="profile" />
      <ProfileName>{profile.name}</ProfileName>
      <ProfileShare>
        <Link src={linkImg} alt="link" onClick={handleClick} />
        {showToast && <Toast>URL이 복사되었습니다</Toast>}
        <Kakao src={kakaoImg} alt="kakao" onClick={handleKaKaoClick} />
        <Facebook
          src={facebookImg}
          alt="facebook"
          onClick={handleFacebookClick}
        />
      </ProfileShare>
    </Profile>
  );
}

export default StyledProfile;
