import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    userDetail: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.userDetail = action.payload;
    },
    removeUser: (state) => {
      state.userDetail = null;
    },
  },
});

export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
