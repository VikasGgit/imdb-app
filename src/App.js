import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";
import './App.css'
// import { ReactComponent as SearchSVG } from './search.svg';

// const API_URL = "http://www.omdbapi.com?apikey= f7a31238";

const API_U = "http://www.omdbapi.com/?i=tt3896198&apikey=f7a31238";

const App = () => {
  const [movies, setMovies]=useState([]);
  const [searchTerm , setsearchTerm]= useState("");
  const handleKeyPress=(e)=>{
    if(e.key==="Enter"){
      searchMovies(searchTerm);
    }
    
  };

  // f7a31238
  const searchMovies = async (title) => {
    const response = await fetch(`${API_U}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for Movie"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        ></input>
                <button onClick={() => searchMovies(searchTerm) }>  Search </button>

      </div>
      {
      movies?.length>0
       ?(
        <div className="container">
          {movies.map((movie)=>(
        <MovieCard movie={movie} />

          ))}
      </div>
      ):(
        <>No movies found</>
      )}
      
    </div>
  );
};

export default App;
