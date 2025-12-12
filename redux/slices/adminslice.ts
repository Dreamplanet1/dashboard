import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object

interface AdminUser {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  role?: {
    name: string;
    features: string[]; // e.g. ["Broadcast", "Challenge", "Payments"]
  };
  permissions?: string[]; // ← we add this flattened array
  [key: string]: any;
}

interface AdminState  {
  loggedInUser: AdminUser;
}


const initialState : AdminState = {
  loggedInUser: {},
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
