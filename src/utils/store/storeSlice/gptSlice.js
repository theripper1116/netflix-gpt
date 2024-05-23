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
    clearSearchedData: (state) => {
      state.searchedResultForMovies = null;
      state.searchedMoviesFromTMDB = null;
    },
  },
});

export const {
  addSearchedMovies,
  addSearchedMoviesFromTMDB,
  clearSearchedData,
} = gptSlice.actions;
export default gptSlice.reducer;
