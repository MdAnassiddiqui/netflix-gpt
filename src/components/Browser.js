import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';

function Browser() {
  useNowPlayingMovies();
 
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
