import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/axios";

export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  const response = await API.post("/auth/login", data);

  localStorage.setItem("token", response.data.token);
  localStorage.setItem("userRole", data.role);

  return response.data;
});

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    role: localStorage.getItem("userRole") || "student",
    loading: false,
  },

  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
      state.user = null;
      state.role = "student";
    },
    setRole: (state, action) => {
      state.role = action.payload;
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

export const { logout, setRole } = authSlice.actions;

export default authSlice.reducer;

