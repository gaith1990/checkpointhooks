import React from "react";
import "./App.css";
import MovieData from "./data.js";
import MovieList from "./components/MovieList/Movielist";
import SearchAppBar from "./components/Filter/Filter";
import { useState } from "react";
import Add from "./components/add/add";
import {BrowserRouter,Route,Switch}  from 'react-router-dom'
import Bond from'./components/bond/bond';
function App() {
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState("");
  const [NewMovie, setNewMovie] = useState(MovieData)
  const handleMovie=(Mov) => { setNewMovie([...NewMovie,Mov])}
 
  return ( 
    <BrowserRouter> 
    <div>
    
    <SearchAppBar setSearch={setSearch} setRate={setRate} />
       <Switch>
      <Route  path='/bond/:id' component={Bond} />  
    
    <Route path="/">
      <div>
      <Add handleMovie={handleMovie}  />
        <MovieList item={NewMovie} search={search} rate={rate} />
        </div>
        </Route>
        
        </Switch>
      
      
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
