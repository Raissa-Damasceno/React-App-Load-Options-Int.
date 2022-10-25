import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteItem({ data, setData }) {
  const index = (newArr) => {
    for (let i = newArr.length - 1; i >= 0; i--) {
      return i;
    }
  };

  const handleRemove = () => {
    try {
      const newArr = [...data];
      let i = index(newArr);

      if (i >= 0) {
        newArr.splice(i, 1);
        setData(newArr);
      } else {
        console.log("There are no more items to be deleted");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <Button
      onClick={() => handleRemove()}
      variant="outlined"
      sx={{ gridRow: "1", gridColumn: "span" }}
      startIcon={<DeleteIcon />}
    >
      Delete
    </Button>
  );
}

export default DeleteItem;
