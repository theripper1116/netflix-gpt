import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./storeSlice/UserSlice";
import MoviesSlice from "./storeSlice/MoviesSlice";

const appStore = configureStore({
  reducer: {
    user: UserSlice,
    movies: MoviesSlice,
  },
});

export default appStore;
