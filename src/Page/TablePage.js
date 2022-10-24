import LoadTable from "../Components/Table/LoadTable";
import NavBar from '../Components/NavBar/NavBar.js'
import Footer from '../Components/Footer/Footer.js'

import './tablePage.css'

function TableData() {
  
  return (
    <div className='table-container'>
      <NavBar />
      <LoadTable />
      <Footer />
    </div>
  );
}

export default TableData;
