import axios from "axios";

// 일단 api주소 1개로만 사용해봄.
async function fetchData() {
  try {
    const response = await axios.get(
      "https://openmind-api.vercel.app/5-3/subjects/?format=json&limit=8"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default fetchData;
