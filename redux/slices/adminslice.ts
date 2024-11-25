import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object

const initialState = {
  loggedInUser: {} as any,
};

// Redux slice
export const adminslice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<any>) => {
      state.loggedInUser = action.payload;
    },
    clearUser: (state) => {
      state.loggedInUser = {};
    },
  },
});

// Export the actions
export const {
  updateUser,
  clearUser
} = adminslice.actions;

// Export the reducer
export default adminslice.reducer;
