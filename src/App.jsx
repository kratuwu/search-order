import "./App.css";
import { SearchBar } from "./components/SearchBar";

function App() {
  const search = (e) => {
    // console.log(e)
  };
  return (
    <>
      <div>
        <SearchBar onSearch={search} />
      </div>
    </>
  );
}

export default App;
