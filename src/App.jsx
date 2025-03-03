import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import mockOrders from './mock_orders'
import { OrderTable } from "./components/OrderTable";
import Banner from "./components/Banner";

function App() {
  const search = (e) => {
    // console.log(e)
  };
  const [ filterData, setFilterData] = useState(mockOrders)
  return (
    <>
      <header className="lg:flex place-content-between mb-4">
        <Banner count={filterData.length}/>
        <SearchBar onSearch={search}/>
      </header>
      <OrderTable data={filterData}/>
    </>
  );
}

export default App;
