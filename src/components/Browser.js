import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import useRecommanded from '../hooks/usePopularMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';

function Browser() {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
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
