import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    playbackVideoInfo: [],
  },
  reducers: {
    addMovies: (state, action) => {
      const { payload } = action;
      state.nowPlayingMovies = payload;
    },
    addPlaybackVideo: (state, action) => {
      const { payload } = action;
      state.playbackVideoInfo = payload;
    },
  },
});

export const { addMovies, addPlaybackVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
