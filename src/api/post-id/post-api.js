import api from "../../utils/api";

/**
 * Todo
 * 1. 주소 부분 4840 부분 하드코딩 => props 로 id 값을 받아서 넣도록 구현해야 함.
 * 2. '../../utils/api.js' 에 존재하는 BASE_URL 로 변환
 */

export async function getSubject(id) {
  const response = await api.get(`/subjects/${id}/`);

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
