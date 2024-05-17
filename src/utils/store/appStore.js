import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./storeSlice/UserSlice";

const appStore = configureStore({
  reducer: {
    user: UserSlice,
  },
});

export default appStore;
