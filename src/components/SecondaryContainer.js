import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList";
const SecondaryContainer = () => {
    const movies =useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className=' bg-black'>
        <div className='mt-0 md:-mt-52  md:pl-6 relative z-10' >        
        <MovieList title ={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title ={"Popular"} movies={movies?.popularMovies}/>
        <MovieList title ={"Top Rated"} movies={movies?.topRatedMovies}/>
        <MovieList title ={"Upcoming Movies"} movies={movies?.UpComingMovies}/>
        
        </div>
    </div>
  ));
}

export default SecondaryContainer
