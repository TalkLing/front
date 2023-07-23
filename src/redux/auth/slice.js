import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from "./index";
const { signUp, signIn } = authOperations;

const initialState = {
  user: { username: null, email: null },
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
        state.user.username = payload.username;
        state.user.email = payload.email;
        state.isLogIn = true;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isLogIn = false;
      })

      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user.email = payload.email;
        state.user.username = payload.username;
        //console.log("payload.user", payload.username);
        state.token = payload.token;
        state.isLogIn = true;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isLogIn = false;
      });
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
