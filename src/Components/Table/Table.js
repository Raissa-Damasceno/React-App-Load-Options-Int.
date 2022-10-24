import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";
import LoadList from "./Load";

function TableData({ data, setData }) {
  return (
    <>
      <AddItem data={data} setData={setData} />
      <DeleteItem data={data} setData={setData} />
      <LoadList />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Country</TableCell>
              <TableCell align="center">Country Code</TableCell>
              <TableCell align="center">Web Site</TableCell>
              <TableCell align="center">Domains</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((dta, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {dta.name}
                  </TableCell>
                  <TableCell align="center">{dta.country}</TableCell>
                  <TableCell align="center">{dta.alpha_two_code}</TableCell>
                  <TableCell align="center">{dta.web_pages}</TableCell>
                  <TableCell align="center">{dta.domains}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableData;
