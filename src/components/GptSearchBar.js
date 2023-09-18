import React, { useRef } from 'react'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);


  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async ()=>{
      console.log(searchText.current.value);

      const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      //MAKE AN API CALL TO OPENAI TO GET MOVIE RESULTS
     const gptResults =  await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });
      
      console.log(gptResults.choices?.[0]?.message?.content);
      //give array of movies
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");  

       // For each movie I will search TMDB API

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults);
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );

      
   };





  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
    <form
      className="w-full md:w-1/2 bg-black grid grid-cols-12"
     onSubmit={(e)=> e.preventDefault()}
    >
      <input
       ref={searchText}
        type="text"
        className=" p-4 m-4 col-span-9"
        placeholder='Search Your Movies'
      />
      <button
        className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        onClick={handleGptSearchClick}
      >
        Search
      </button>
    </form>
  </div>
  )
}

export default GptSearchBar