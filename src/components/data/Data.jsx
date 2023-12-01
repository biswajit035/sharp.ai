/* eslint-disable no-unused-vars */
import PieChart from "../PieChart";
import GenTable from "./genTable";
import { useEffect, useState } from "react";


const Data = () => {
    const [rawData, setRawData] = useState({})
    const [rows, setRow] = useState({});

    async function fetchData() {
      const fetchedData = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await fetchedData.json();
      setRawData(data);

      // Filter data where userId is 1
      const filteredData = data.filter((item) => item.userId === 1);
      setRow(filteredData);
    }

    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className="data">
      {rawData.length &&
      <PieChart one={rows.length} others={rawData.length} />}
      <div className="left">
        <GenTable rows={rows} />
      </div>
    </div>
  );
};

export default Data;
