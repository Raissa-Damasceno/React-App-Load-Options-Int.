import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
// import { useState } from "react";



function DeleteItem({data, setData}) {
  const index = (newArr) =>{
    for (let i = newArr.length -1; i >= 0; i--) {
      return i;
    }
  }

    const handleRemove = (d) => {
        const newArr = [...data];
        let i = index(newArr)

        if(i >= 0) {
          newArr.splice(i, 1);
          setData(newArr);
          console.log(`Remove the index ${i}`);
        } else (
          console.log('Não há mais items para ser deletados'))
      };

  return (
    <Button
    onClick={() => handleRemove()}
      variant="outlined"
      startIcon={<DeleteIcon />}
    >
      Delete
    </Button>
  );
}

export default DeleteItem;
