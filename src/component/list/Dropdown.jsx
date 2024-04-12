import React, { useState } from "react";
import styled from "styled-components";

//

// 드롭다운 컴포넌트 스타일
const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DropdownButton = styled.button`
  position: relative;
  color: #818181;
  border-radius: 8px;
  border: 1px solid #818181;
  font-size: 14px;
  font-weight: 500;
  width: 88px;
  height: 34px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 6px;

  &:focus {
    color: #000000;
    border-color: #000000;
  }
`;
const DropdownButtonArrowImg = styled.img`
  width: 14px;
  height: 14px;
`;
const DropdownContent = styled.div`
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px #8c8c8c40;
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 35%;
  width: 78px;
`;

const DropdownOption = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  padding: 10px;

  &:hover {
    color: #1877f2;
  }
`;

const Dropdown = ({ options }) => {
  const imgUrl = "../../images";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [arrowImg, setArrowImg] = useState("../../images/Arrow-down.svg");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setArrowImg(`${imgUrl}/Arrow-down.svg`);
    } else {
      setArrowImg(`${imgUrl}/Arrow-up.svg`);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setArrowImg("../../images/Arrow-down.svg");
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption}
        <DropdownButtonArrowImg src={arrowImg} alt="아래 화살표" />
      </DropdownButton>
      <DropdownContent open={isOpen}>
        {options.map((option, index) => (
          <DropdownOption key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </DropdownOption>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

// 사용자 정의 드롭다운 메뉴를 사용하는 예제
const CustomDropdownMenu = () => {
  const options = ["이름순", "최신순"];

  return <Dropdown options={options} />;
};

export default CustomDropdownMenu;
