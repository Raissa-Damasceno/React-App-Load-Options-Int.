import List from "../Components/Table/List";
import NavBar from "../Components/NavBar/NavBar.js";
import Footer from "../Components/Footer/Footer.js";

import "./tablePage.css";

function TableData() {
  return (
    <div className="table-container">
      <NavBar />
      <List />
      <Footer />
    </div>
  );
}

export default TableData;
