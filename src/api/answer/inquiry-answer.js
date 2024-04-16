// 답변조회
import axios from "axios";

export const inquiryAnswer = async () => {
  try {
    const response = await axios.get(
      "https://openmind-api.vercel.app/5-3/questions/8264/"
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
