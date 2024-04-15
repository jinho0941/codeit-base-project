//답변 생성
import axios from "axios";

export const postAnswer = async (content) => {
  try {
    const response = await axios.post(
      "http://openmind-api.vercel.app/5-3/questions/49/answers/",
      {
        content: content,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
