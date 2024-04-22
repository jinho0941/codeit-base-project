import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import arrowDown from "../../images/list/Arrow-down.svg";
import arrowUp from "../../images/list/Arrow-up.svg";

const DropdownContainer = styled.div`
  position: relative;
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
const DropdownOptionBox = styled.div`
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px #8c8c8c40;
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 100%; /* 버튼 아래에 표시 */
  width: 88px;
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

const Dropdown = ({ options, onChange, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowImg, setArrowImg] = useState(arrowDown);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setArrowImg(arrowDown);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setArrowImg(arrowDown);
    } else {
      setArrowImg(arrowUp);
    }
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    setArrowImg(arrowDown);
    onChange(option);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption}
        <DropdownButtonArrowImg src={arrowImg} alt="아래 화살표" />
      </DropdownButton>
      <DropdownOptionBox open={isOpen}>
        {options.map((option, index) => (
          <DropdownOption key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </DropdownOption>
        ))}
      </DropdownOptionBox>
    </DropdownContainer>
  );
};

export default Dropdown;
