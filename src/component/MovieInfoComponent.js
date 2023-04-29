import React, { useEffect,useState } from 'react'
import "./MovieInfoComponent.css"
import { API_KEY } from '../App'

const MovieInfoComponent = (props) => {
    const[movieInfo, setMOvieInfo]=useState([])
   const  {selectedMovie}=props
    useEffect(()=>{
        const fetchInfoData= async(selectedMovie)=>{
            try{
                const response = await fetch(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
        //   console.log(response)
                const infoData= await response.json();
           setMOvieInfo(infoData)
        //    console.log(movieInfo)
            }

            catch(error){

                console.log(`some error occured:${error}`)

            }
           
        }

        fetchInfoData(selectedMovie);
    },[selectedMovie])
    // console.log(movieInfo)
  return (
    
    <div className='Container-MovieInfo'>
        {movieInfo?<>

            <img  className='CoverImage-MovieInfo' src={movieInfo?.Poster} alt="" />
    <div className='InfoColumn'>
    <span className='MovieName'>{movieInfo?.Type}:{movieInfo.Title}</span>
        <span className='MovieInfo'>
            IMDB Rating:<span className='span'>{movieInfo.imdbRating}</span>
        </span>
        <span className='MovieInfo'>
            Year:<span className='span'>{movieInfo.Year}</span>
        </span>
        <span className='MovieInfo'>
            Language:<span className='span'>{movieInfo.Language}</span>
        </span>
        <span className='MovieInfo'>
           Rated:<span className='span'>{movieInfo.Rated}</span>
        </span>
        <span className='MovieInfo'>
           Released:<span className='span'>{movieInfo.Released}</span>
        </span>
        <span className='MovieInfo'>
           Runtime:<span className='span'>{movieInfo.Runtime}</span>
        </span>
        <span className='MovieInfo'>
           Genre:<span className='span'>{movieInfo.Genre}</span>
        </span>
        <span className='MovieInfo'>
           Director:<span className='span'>{movieInfo.Director}</span>
        </span>
        <span className='MovieInfo'>
           Genre:<span className='span'>{movieInfo.Genre}</span>
        </span>
        <span className='MovieInfo'>
           Actors:<span className='span'>{movieInfo.Actors}</span>
        </span>
        <span className='MovieInfo'>
           Plot:<span className='span'>{movieInfo.Plot}</span>
        </span>
    </div>
    <span className='Close' onClick={()=>{props.onMovieSelect()}}  ><b>X</b></span>
        
        </>:"LOADING..."}
      
    </div>
  )
}

export default MovieInfoComponent
