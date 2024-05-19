import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    playbackVideoInfo: [],
    popularMovies: [],
    topRatedMovies: [],
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
    addPopularMovies: (state, action) => {
      const { payload } = action;
      state.popularMovies = payload;
    },
    addTopRatedMovies: (state, action) => {
      const { payload } = action;
      state.topRatedMovies = payload;
    },
  },
});

export const {
  addMovies,
  addPlaybackVideo,
  addPopularMovies,
  addTopRatedMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
