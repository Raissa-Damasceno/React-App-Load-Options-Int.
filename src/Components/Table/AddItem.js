import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import "./table.css";

function AddItem({ data, setData }) {
  const handleAdd = () => {
    try {
      let newArr = [...data];
      if (data.length > -1) {
        newArr.push(newArr[0]);

        setData(newArr);
      } else {
        console.log("There are no items to add");
      }
    } catch (error) {
      throw error
    }
  };
  return (
    <Button
      onClick={() => handleAdd()}
      variant="outlined"
      sx={{ gridRow: "1", gridColumn: "span" }}
      endIcon={<AddIcon />}
    >
      Add
    </Button>
  );
}

export default AddItem;
