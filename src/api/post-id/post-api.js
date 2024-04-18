import axios from "axios";

/**
 * Todo
 * 1. 주소 부분 4840 부분 하드코딩 => props 로 id 값을 받아서 넣도록 구현해야 함.
 * 2. '../../utils/api.js' 에 존재하는 BASE_URL 로 변환
 */

const BASE_URL = "https://openmind-api.vercel.app/5-3";

export async function getSubject() {
  const response = await axios.get(`${BASE_URL}/subjects/4840/`);

  return response;
}

export async function getQuestion({ offset, limit }) {
  const query = `?offset=${offset}&limit=${limit}`;
  const response = await axios.get(
    `${BASE_URL}/subjects/4840/questions/${query}`
  );

  return response;
}

export async function createQuestion(inputValue) {
  const response = await axios.post(`${BASE_URL}/subjects/4840/questions/`, {
    content: inputValue,
  });

  return response;
}

export async function createLike(id) {
  const response = await axios.post(`${BASE_URL}/questions/${id}/reaction/`, {
    type: "like",
  });

  return response;
}

export async function createDislike(id) {
  const response = await axios.post(`${BASE_URL}/questions/${id}/reaction/`, {
    type: "dislike",
  });

  return response;
}
