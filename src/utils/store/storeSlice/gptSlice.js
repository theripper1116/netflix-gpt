import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    searchedResultForMovies: [],
    searchedMoviesFromTMDB: [],
  },
  reducers: {
    addSearchedMovies: (state, action) => {
      const { payload } = action;
      state.searchedResultForMovies = payload;
    },
    addSearchedMoviesFromTMDB: (state, action) => {
      const { payload } = action;
      state.searchedMoviesFromTMDB.push(payload);
    },
  },
});

export const {
  addSearchedMovies,
  addSearchedMoviesFromTMDB,
} = gptSlice.actions;
export default gptSlice.reducer;
