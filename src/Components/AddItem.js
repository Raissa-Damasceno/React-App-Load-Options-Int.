import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function AddItem({data, setData}) {
  const handleAdd = (d) => {
    const newArr = [...data];
    const index = data.findIndex((contact) => contact.id === d);


    setData()

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
