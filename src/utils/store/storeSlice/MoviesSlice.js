import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    playbackInfo: [],
  },
  reducers: {
    addMovies: (state, action) => {
      const { payload } = action;
      state.nowPlayingMovies = payload;
    },
    addPlayback: (state, action) => {
      const { payload } = action;
      state.playbackInfo = payload;
    },
  },
});

export const { addMovies, addPlayback } = moviesSlice.actions;
export default moviesSlice.reducer;
