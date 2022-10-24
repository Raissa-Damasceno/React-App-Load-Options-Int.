/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import TableData from "../Components/Table/Table";

function api() {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await fetch(
      `http://universities.hipolabs.com/search?country=Australia`
    );

    let result = await response.json();
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <TableData data={data} setData={setData} />
    </>
  );
}

export default api;
