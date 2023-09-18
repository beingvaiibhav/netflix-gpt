import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'Movies',
    initialState:{
        movieResults: null,
        movieNames: null,
    },
    reducers:{
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
          },
    }
})

export const {addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;