import axios from "axios";

const ANSWER_URL = "https://openmind-api.vercel.app/5-3/questions/1234";
const ANSWERS_URL = "https://openmind-api.vercel.app/5-3/answers/1234/";

//답변 생성
export async function createAnswer(inputContents) {
  const respose = await axios.post(`${ANSWER_URL}/answers/`, {
    content: inputContents,
  });

  return respose;
}

//답변 조회
export async function inquiryAnswer() {
  const response = await axios.get(`${ANSWERS_URL}`);

  return response;
}

//답변 삭제
export async function deleteAnswer() {
  const response = await axios.get(`${ANSWERS_URL}`);

  return response;
}

//답변 수정
export async function modifyAnswer() {
  const response = await axios.put(`${ANSWERS_URL}`);

  return response;
}
