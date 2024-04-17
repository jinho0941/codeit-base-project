import { useState } from "react";
import styles from "./Style.module.css";
import more from "../../images/answer/More.svg";

const OptionMenu = ({ handleModifyClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <img
        className={styles.kebab}
        src={more}
        alt="케밥버튼"
        onClick={toggleMenu}
      />
      {isMenuOpen && <div onClick={handleModifyClick}>수정하기</div>}
    </>
  );
};

export default OptionMenu;
