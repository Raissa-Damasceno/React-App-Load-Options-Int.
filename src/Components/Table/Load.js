import Button from "@mui/material/Button";
import SyncIcon from "@mui/icons-material/Sync";

function LoadList() {
  const handleLoad = () => {
    console.log("Load");
  };
  return (
    <Button
    onClick={() => handleLoad()}
    variant="outlined"
    startIcon={<SyncIcon />}
  >
    Load
  </Button>);
}

export default LoadList;
