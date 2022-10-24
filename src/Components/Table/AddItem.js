import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function AddItem({data, setData}) {
  const handleAdd = () => {

    console.log("Add");
  };
  return (
    <Button
      onClick={() => handleAdd()}
      variant="contained"
      endIcon={<AddIcon />}
    >
      Add
    </Button>
  );
}

export default AddItem;
