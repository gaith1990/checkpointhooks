import React from "react";
import "./App.css";
import MovieData from "./data.js";
import MovieList from "./components/MovieList/Movielist";
import SearchAppBar from "./components/Filter/Filter";
import { useState } from "react";
import Add from "./components/add/add"
function App() {
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState("");
  const [NewMovie, setNewMovie] = useState(MovieData)
  const handleMovie=(Mov) => { setNewMovie([...NewMovie,Mov])}
 
  return ( 
    <div>
      <div>
        <SearchAppBar setSearch={setSearch} setRate={setRate} />
      </div>
      <Add handleMovie={handleMovie}  />
      <div>
        <MovieList item={NewMovie} search={search} rate={rate} />
        
    
      </div>
      
      
    </div>
  );
}

export default App;
