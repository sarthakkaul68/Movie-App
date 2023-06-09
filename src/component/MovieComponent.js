import React from 'react'
import "./MovieComponent.css"

const MovieComponent = (props) => {
  const {Title,Year,imdbID,Type,Poster}=props.movie;
  
  return (
    <>
    <div className='MovieContainer' onClick={()=>{props.onMovieSelect(imdbID)}}>
      <img className='CoverImage' src={Poster} alt="" />
      <span className='MovieName'>{Title}</span> 
    <div className='InfoColumn'>

      <span className='MovieInfo'>Year:{Year}</span>
      <span className='MovieInfo'>Type:{Type}</span>
    </div>
    <button className=''>FAVOURITE</button>
    </div>
    
    </>
  )
}

export default MovieComponent
