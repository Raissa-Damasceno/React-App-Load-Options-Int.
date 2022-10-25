import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {
  TableHead,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Table,
  Paper,
  IconButton,
  Grid,
} from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";
import LoadTable from "./LoadTable";

import "./table.css";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function List() {
  const [data, setData] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="container-table">
      <Grid
        sx={{
          display: "grid",
          gridAutoColumns: "1fr",
          gap: 5,
        }}
      >
        <LoadTable handleLoad={handleLoad} />
        <AddItem data={data} setData={setData} />
        <DeleteItem data={data} setData={setData} />
      </Grid>
      <section className="section-table">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Country</TableCell>
              <TableCell align="center">Country Code</TableCell>
              <TableCell align="center">Web Site</TableCell>
              <TableCell align="center">Domains</TableCell>
            </TableHead>

            {data &&
              (rowsPerPage > 0
                ? data.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data
              ).map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" align="left">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.country}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.alpha_two_code}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.web_pages}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.domains}
                  </TableCell>
                </TableRow>
              ))}
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, { label: "All", value: -1 }]}
                colSpan={6}
                count={data ? data.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </Table>
        </TableContainer>
      </section>
    </div>
  );
}

export default List;
