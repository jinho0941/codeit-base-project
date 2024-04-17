import axios from "axios";

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
