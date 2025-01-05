import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [search,setSearch] = useState("");
  return (
    <div className="App">
       <h1>Dictionary App</h1>
       <input type = "text" name="searchBar" value = {search} onChange={(e)=>{setSearch(e.target.value)}} placeholder='Search for a word' />
       <button>Search</button>
       <p>Definition:</p>
    </div>
  );
}

export default App;
