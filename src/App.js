import { useState } from "react";
import "./App.css"
import MovieComponent from "./component/MovieComponent";
import MovieInfoComponent from "./component/MovieInfoComponent";
// https://www.omdbapi.com/?s={MOVIE_NAME}&apikey={API_KEY}

// if(movieData.Response==="True"){
      //   updateMovieList(movieData.Search)
      //   console.log(movieList)

      // }
      export const API_KEY="e9bde9a1"
function App() {
  const[searchQuery,updateSearchQuery]=useState()
  const [movie,getMovie]=useState()
  const [movieList,updateMovieList]=useState([])
  const [selectedMovie,onMovieSelect]=useState()

  const fetchData=async(SearchString)=>{
    try{
      const res= await fetch(`https://www.omdbapi.com/?s=${SearchString}&apikey=${API_KEY}`);
      const movieData= await res.json();
      if(movieData.Response==="True"){
        updateMovieList(movieData.Search)
       

      }
      
          }
    catch(error){
      console.log(error)
    }
    
  }
  const onTextChange=(event)=>{
    updateSearchQuery(event.target.value);
    clearTimeout(movie)
   const timeout= setTimeout(()=>{
      fetchData(event.target.value)
    },1000);
    getMovie(timeout)
  }
  
  return (
    <div className="Container">
      <div className="Header">
        <div className="AppName">
          <img src="/movie-icon.svg" alt="movieimage" className="MovieImage" />
          React movie app
        </div>
        <div className="SearchBox">
          <img src="/search-icon.svg" className="SearchIcon" alt="" />
          <input type="text" value={searchQuery} placeholder="Search Movie" className="SearchInput" onChange={onTextChange} />

        </div>
      </div>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
      <div className="MovieListContainer">
      {(movieList.length)? (movieList.map((movie,index)=>{
       return (<MovieComponent movie={movie} key={index} onMovieSelect={onMovieSelect}  />)})):"SEARCH FOR A MOVIE"
      }
      </div>
      
    </div>
  );
}

export default App;
