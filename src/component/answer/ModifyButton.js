import more from "../../images/answer/More.svg";
import styled from "styled-components";
import { useState } from "react";

const KebabButton = styled.div`
  cursor: pointer;
  position: relative;
`;

const DropdownMenu = styled.div`
  top: 30px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const MenuItem = styled.button`
position: absolute
  display: block;
  width: 100%
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

function ModifyButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleKebabClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleModifyMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <KebabButton onClick={handleKebabClick}>
        <img src={more} alt="수정하기 버튼" />
      </KebabButton>
      {isMenuOpen && (
        <DropdownMenu>
          <MenuItem onClick={handleModifyMenuClick}>수정하기</MenuItem>
        </DropdownMenu>
      )}
    </>
  );
}

export default ModifyButton;
