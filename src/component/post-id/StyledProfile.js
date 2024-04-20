import styled from "styled-components";
import linkImg from "../../images/post-id-images/link.svg";
import kakaoImg from "../../images/post-id-images/kakaoImage.svg";
import facebookImg from "../../images/post-id-images/facebookImage.svg";
import { useState, useEffect } from "react";
import { FacebookShareButton } from "react-share";

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
  width: 150px;
  height: 150px;
  border-radius: 50%;
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

const Kakaotalk = styled(LinkBase)`
  background: #fee500;
`;

const Facebook = styled(LinkBase)`
  background: #1877f2;
`;

const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 5px;
  z-index: 5;
`;

function StyledProfile({ profile }) {
  const { Kakao } = window;

  const realUrl = "https://base-project-dev.netlify.app/";

  const [showToast, setShowToast] = useState(false);

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

  const handleClick = () => {
    const url = window.location.href;
    copyToClipBoard(url);

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const handleKaKaoClick = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "오픈마인드",
        description: "질문 공유 사이트",
        imageUrl:
          "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "질문 하러가기",
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(""); // KAKAO_APP_KEY
  }, [Kakao]);

  return (
    <Profile>
      <ProfileImage src={profile.imageSource} alt="profile" />
      <ProfileName>{profile.name}</ProfileName>
      <ProfileShare>
        <Link src={linkImg} alt="link" onClick={handleClick} />
        {showToast && <Toast>URL이 복사되었습니다</Toast>}
        <Kakaotalk src={kakaoImg} alt="kakao" onClick={handleKaKaoClick} />
        <FacebookShareButton url={realUrl}>
          <Facebook src={facebookImg} alt="facebook" />
        </FacebookShareButton>
      </ProfileShare>
    </Profile>
  );
}

export default StyledProfile;
