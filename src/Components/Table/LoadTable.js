import { useState } from "react";
import Button from "@mui/material/Button";
import SyncIcon from "@mui/icons-material/Sync";

import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";
import List from "./List";

function LoadTable() {
  const [data, setData] = useState();

  const handleLoad = async () => {
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=Australia`
      );

      let result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        onClick={() => handleLoad()}
        variant="outlined"
        startIcon={<SyncIcon />}
      >
        Load List
      </Button>

      <AddItem data={data} setData={setData} />
      <DeleteItem data={data} setData={setData} />

      <List data={data} />
    </>
  );
}

export default LoadTable;
