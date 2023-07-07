import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from "./index";
const { signUp, signIn, signOut, getUser } = authOperations;

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogIn: false,

  loading: false,
  loadingUser: false,

  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user.email = payload.email;
        state.user.name = payload.name;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isLogIn = false;
      });
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
