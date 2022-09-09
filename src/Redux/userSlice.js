import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isError: null,
  },
  reducers: {
    LoginStart: (state) => {
      state.isFetching = true;
    },
    LoginSucceed: (state, action) => {
      state.isFetching = false;

      state.currentUser = action.payload;
    },
    LoginError: (state, action) => {
      state.isError = action.payload;
    },
    EmptyError: (state) => {
      state.isError = null;
    },
    Logout: (state) => {
      state.currentUser = null;
    },
    RegisterStart: (state) => {
      state.isFetching = true;
    },
    RegisterSucceed: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    RegisterError: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});
export const {
  LoginStart,
  LoginSucceed,
  LoginError,
  RegisterStart,
  RegisterSucceed,
  RegisterError,
  EmptyError,
  Logout,
} = userSlice.actions;
export default userSlice.reducer;
