import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { OrderTable } from './components/OrderTable'

function App() {
  const [count, setCount] = useState(0)
  const search =(e) => {
    console.log(e)
  }
  return (
    <>
      <SearchBar onSearch={search}/>
      <OrderTable/>
    </>
  )
}

export default App
