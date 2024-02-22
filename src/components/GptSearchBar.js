import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {

    const dispatch =useDispatch();
    const langKey =useSelector((store) => store.config.lang);
    const searchText =useRef(null);
// search movie in TMDB
const searchMoviesTMDB =async (movie) =>{
    const data =await fetch (
        "https://api.themoviedb.org/3/search/movie?query="+movie+
        "&include_adult=false&language=en-US&page=1",API_OPTIONS
    );
    const json =await data.json();
    return json.results;
};
const handleGptSearchClick =async () =>{
    console.log(searchText.current.value);
    //Make an API call to Gpt API and get Movie Results
const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query" +searchText.current.value +".only give me names of 5 movies ,comma separated like the example result given ahead.Example Result: Gadar2 ,Pathan , Tiger3 , Don2 , Golmaal";

const gptResults = await openai.chat.completions.create({
    messages: [{ role: 'user', content:searchText.current.value }],
    model: 'gpt-3.5-turbo',
  });
  if(!gptResults.choices) {
    //TODO:Write Error Handling Error
  }
  console.log(gptResults.choices?.[0]?.message?.content);
  const gptMovies =gptResults.choices?.[0]?.message?.content.split(",");
  //It give the movies in array form
  //for each movies I will search TMDB Api
  const promiseArray =gptMovies.map((movie) => searchMoviesTMDB(movie));
  //[promise ,promise ,promise , promise ,promise]
  //resolve 5 promises then call tmdbresults
  const tmdbResults =await Promise.all(promiseArray);
  console.log(tmdbResults);
  dispatch(addGptMovieResult({movieNames: gptMovies ,movieResults:tmdbResults}));
};
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12'
       onSubmit={(e) => e.preventDefault()}
      >
    

        < 
            input ref={searchText} type ="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700  text-white rounded-lg' onClick={handleGptSearchClick}>
          {lang[langKey].search} 
            </button>
      </form>
    </div>
  )
}

export default GptSearchBar ;
