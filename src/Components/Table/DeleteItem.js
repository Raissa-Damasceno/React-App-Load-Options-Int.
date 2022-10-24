import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
// import { useState } from "react";

function DeleteItem({data, setData}) {
    const handleRemove = (d) => {
        const newArr = [...data];
        const index = data.findIndex((contact) => contact.id === d);

        newArr.splice(index, 1);
        setData(newArr);
        console.log("Remove");
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
