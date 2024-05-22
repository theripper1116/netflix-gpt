import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    searchedResultForMovies: [],
  },
  reducers: {
    addSearchedMovies: (state, action) => {
      const { payload } = action;
      state.searchedResultForMovies = payload;
    },
  },
});

export const { addSearchedMovies } = gptSlice.actions;
export default gptSlice.reducer;
