import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopularMovies =()=>{
  const popularMovies =useSelector(
    store => store.movies.popularMovies)
    //fetch Data from TMDB ApI and update store
    const dispatch =useDispatch();
    const getRecommandedMovies =async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    
   
    
    const json =await data.json ();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
   useEffect(() =>{
   if(!popularMovies) 
   getRecommandedMovies();
   },[])
};
export default usePopularMovies;