import api from "../../utils/api";

const BASE_URL = "https://openmind-api.vercel.app/5-3/subjects/5207";

export async function getSubject(id) {
  const response = await api.get(`/subjects/${id}/`);

  return response;
}

export async function deleteAnswer(answerId) {
  const response = await api.delete(`/answers/${answerId}`);
  return response;
}

export async function getQuestion({ offset, limit, id }) {
  const query = `?offset=${offset}&limit=${limit}`;
  const response = await api.get(`/subjects/${id}/questions/${query}`);

  return response;
}

export async function createQuestion(inputValue, id) {
  const response = await api.post(`/subjects/${id}/questions/`, {
    content: inputValue,
  });

  return response;
}

export async function createLike(id) {
  const response = await api.post(`/questions/${id}/reaction/`, {
    type: "like",
  });

  return response;
}

export async function createDislike(id) {
  const response = await api.post(`/questions/${id}/reaction/`, {
    type: "dislike",
  });

  return response;
}
