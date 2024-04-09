import React from "react";
import { Link } from "react-router-dom";

function GoAskButton() {
  return (
    <Link to="/list">
      <button>질문하러 가기</button>
    </Link>
  );
}
export default GoAskButton;
