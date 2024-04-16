import { useEffect, useState } from "react";
import fetchData from "./list-api.js";
import CardListContainer from "../../component/list/CardList.jsx";

function DataContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData.results);
    };
    fetchDataAndSetData();
  }, []);

  return <CardListContainer data={data} />;
}

export default DataContainer;
