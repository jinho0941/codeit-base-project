import styles from "./MainStyle.module.css";
import { useState } from "react";
import styled from "styled-components";

//이미지경로
import Image2 from "./image/Image2.svg";
import logo from "./image/logo.svg";
import Ellipse1 from "./image/Ellipse1.svg";
import Link from "./image/Link.svg";
import Kakao from "./image/Kakao.svg";
import Facebook from "./image/Facebook.svg";

const copyToClipBoard = (text) => {
  navigator.clipboard.writeText(text);
};

const Toast = styled.div`
  position: fixed;
  left: 50%;
  bottom: 7%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--grayScale10);
  border-radius: 5px;
  z-index: 1000;
  width: 150px;
`;

function Main() {
  const [showToast, setShowToast] = useState(false);

  const copyLink = () => {
    const url = "http://localhost:3000/post/:postId/answer";
    copyToClipBoard(url);

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const shareKaKao = () => {
    window.open(
      "https://accounts.kakao.com/login/?continue=https%3A%2F%2Fsharer.kakao.com%2Fpicker%2Flink%3Fapp_key%3D4e0f02e43248fed6c5850431ea527a61%26short_key%3D240e24a5-2366-4027-b85f-a7838ad7165a#login"
    );
  };

  const shareFacebook = () => {
    window.open(
      "https://www.facebook.com/login.php?skip_api_login=1&api_key=491411048941185&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv15.0%2Fdialog%2Fshare%3Fdisplay%3Dpopup%26href%3Dhttps%253A%252F%252Fwww.kakaocorp.com%252Fpage%252Fservice%252Fservice%252FKakaoTalk%253Flang%253DKOR%26client_id%3D491411048941185%26ret%3Dlogin&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Freturn%2Fclose%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=ko_KR"
    );
  };

  return (
    <>
      <img
        className={styles.backgroundImage}
        src={Image2}
        alt="페이지 상단 이미지"
      />
      <img className={styles.logoImage} src={logo} alt="홈페이지 로고" />
      <img className={styles.userImage} src={Ellipse1} alt="사용자 프로필" />
      <div className={styles.userName}>아초는 고양이</div>
      <div className={styles.links}>
        <img
          className={styles.link}
          src={Link}
          onClick={copyLink}
          alt="url을 클립보드에 복사하는 링크"
        />
        {showToast && <Toast>URL이 복사되었습니다.</Toast>}
        <img
          className={styles.link}
          src={Kakao}
          onClick={shareKaKao}
          alt="카카오톡으로 공유하는 화면이 보이는 링크"
        />
        <img
          className={styles.link}
          src={Facebook}
          onClick={shareFacebook}
          alt="페이스북으로 공유하는 화면이 보이는 링크"
        />
      </div>
    </>
  );
}

export default Main;
