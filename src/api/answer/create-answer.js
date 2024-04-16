//답변 생성
import axios from "axios";

export async function createAnswer() {
  const response = await axios.post(
    "https://openmind-api.vercel.app/5-3/questions/8264/answers/",
    {
      content: "test",
      isRejected: true,
    }
  );

  return response;
}

// export const postAnswer = async () => {
//   try {
//     const response = await axios.post(
//       "http://openmind-api.vercel.app/5-3/questions/8264/answers/",
//       {
//         content: "true",
//         isRejected: true,
//       }
//     );
//     return response;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
