import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./storeSlice/UserSlice";
import MoviesSlice from "./storeSlice/MoviesSlice";
import gptSlice from "./storeSlice/gptSlice";

const appStore = configureStore({
  reducer: {
    user: UserSlice,
    movies: MoviesSlice,
    openAIGPT: gptSlice,
  },
});

export default appStore;
