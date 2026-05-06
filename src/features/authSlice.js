import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/axios";

export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  const response = await API.post("/auth/login", data);

  localStorage.setItem("token", response.data.token);

  return response.data;
});

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    loading: false,
  },

  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
