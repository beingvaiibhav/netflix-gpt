import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion/>
      </div>
    </>
  )
}

export default GptSearch