import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { OrderTable } from './components/OrderTable'
import mockOrders from './mock_orders'
function App() {
  const [ filterData, setFilterData] = useState(mockOrders)
  const search =(e) => {
    // console.log(e)
  }
  
  return (
    <>
      <SearchBar onSearch={search}/>
      <OrderTable data={filterData}/>
    </>
  )
}

export default App
