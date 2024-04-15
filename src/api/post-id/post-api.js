import axios from "axios";

const BASE_URL = "https://openmind-api.vercel.app/5-3/subjects/4840";

export async function getSubject() {
  const response = await axios.get(`${BASE_URL}/`);

  return response;
}

export async function getQuestion() {
  const response = await axios.get(`${BASE_URL}/questions/`);

  return response;
}

export async function createQuestion(inputValue) {
  const response = await axios.post(`${BASE_URL}/questions/`, {
    content: inputValue,
  });

  return response;
}
