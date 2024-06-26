import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register, refreshUser } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    isError: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(logIn.pending, state => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(logOut.pending, state => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
  
})

export default authSlice.reducer;