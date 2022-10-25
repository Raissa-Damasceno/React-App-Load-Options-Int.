import Button from "@mui/material/Button";
import SyncIcon from "@mui/icons-material/Sync";
import "./table.css";

function LoadTable({ handleLoad }) {
  return (
    <>
        <Button
          onClick={() => handleLoad()}
          variant="outlined"
          sx={{ gridRow: '1', gridColumn: 'span 3' }}
          startIcon={<SyncIcon />
          }
        >
          Load List
        </Button>
    </>
  );
}

export default LoadTable;
