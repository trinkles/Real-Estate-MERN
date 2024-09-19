import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    start: (state) => {
      state.loading = true;
    },
    successful: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    successfulOut: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    failure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { start, successful, successfulOut, failure } = userSlice.actions;

export default userSlice.reducer;
