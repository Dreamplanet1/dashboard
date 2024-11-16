import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object

const initialState = {
  acceptedAdmin: [] as any[],
  pendingAdmin: [] as any[],
  adminRoles: [] as any[],
};

// Redux slice
export const adminsettingslice = createSlice({
  name: "adminsetting",
  initialState,
  reducers: {
    updateacceptedAdmin: (state, action: PayloadAction<any[]>) => {
      state.acceptedAdmin = action.payload;
    },
    updatependingAdmin: (state, action: PayloadAction<any[]>) => {
      state.pendingAdmin = action.payload;
    },
    updateRoles: (state, action: PayloadAction<any>) => {
      state.adminRoles = action.payload;
    },
   
  },
});

// Export the actions
export const {
  updateacceptedAdmin,
  updatependingAdmin,
  updateRoles,
  
} = adminsettingslice.actions;

// Export the reducer
export default adminsettingslice.reducer;
