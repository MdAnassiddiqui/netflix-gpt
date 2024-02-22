import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';

import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
 

const Browser =() =>{
  const showGptSearch =useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();



 
  return (
    <div>
      <Header/>
      {showGptSearch ? (
        <GptSearch/>
      ) :(
        <>
        <MainContainer/>
        <SecondaryContainer/>
        </>
      )};
     
     

      {/*
      MainContainer
      -VideoBackground
      -videoTitle
      SecondaryContainer
      -MovieList *n
         -cards *n 
       */}
    </div>
  )
}

export default Browser;
