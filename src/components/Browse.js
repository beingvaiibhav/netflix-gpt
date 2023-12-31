import React from 'react'
import Header from './Header'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const Browse = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <Header/>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  )
}

export default Browse