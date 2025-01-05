import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";

function App() {
  const [search,setSearch] = useState("");
  const [dict,setDict] = useState([]);
  const [definition,setDefiniton] = useState("");
    useEffect(() => {
      fetch('../data/data.json')
        .then((response) => response.json())
        .then((data) => {
          setDict(data);
          console.log(data);
        })
        .catch((error) => {
          console.error('Error fetching the data:', error);
        });
    }, []);

  const handleSearch = ()=>{
    let present = false;
    for(let i=0;i<dict.length;i++){
      let currentWord = dict[i].word;
      if(currentWord.toLowerCase()===search.toLowerCase()){
        console.log(currentWord.toLowerCase(),dict[i].meaning)
         setDefiniton(dict[i].meaning);
         present = true;
         break;
      }
    }
    if(!present){
      setDefiniton("Word not found in the dictionary.");
    }

  }
  return (
    <div className="App">
       <h1>Dictionary App</h1>
       <input type = "text" name="searchBar" value = {search} onChange={(e)=>{setSearch(e.target.value)}} placeholder='Search for a word' />
       <button onClick={()=>handleSearch()}>Search</button>
       <p>Definition:</p>
       <p>{definition}</p>
    </div>
  );
}

export default App;
