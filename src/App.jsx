import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import mockOrders from './mock_orders'
import Banner from "./components/Banner";

function App() {
  const search = (e) => {
    // console.log(e)
  };
  const [ filterData, setFilterData] = useState(mockOrders)
  return (
    <>
      <div className="flex place-content-between">
        <Banner count={filterData.length}/>
        <SearchBar onSearch={search}/>
      </div>
    </>
  );
}

export default App;
