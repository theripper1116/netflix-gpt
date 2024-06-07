import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    playbackVideoInfo: {},
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
    addSearchedMoviesFromGPT: (state, action) => {
      const { payload } = action;
      state.searchedMoviesFromGPT = payload;
    },
    removeAllMovies: (state) => {
      state.nowPlayingMovies = null;
      state.playbackVideoInfo = null;
      state.popularMovies = null;
      state.topRatedMovies = null;
    },
  },
});

export const {
  addMovies,
  addPlaybackVideo,
  addPopularMovies,
  addTopRatedMovies,
  removeAllMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
