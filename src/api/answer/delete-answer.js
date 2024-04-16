import axios from "axios";

export const deleteAll = async () => {
  try {
    await axios.delete("http://openmind-api.vercel.app/5-3/answers/8264/");
  } catch (error) {
    console.error("삭제하는 동안 오류 발생", error);
  }
};
