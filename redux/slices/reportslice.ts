import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object

const initialState = {
  creatorReport: [] as any[],
  admin: [] as any[],
  creator: [] as any[],
};

// Redux slice
export const reportslice = createSlice({
  name: "report",
  initialState,
  reducers: {
    updateCreatorReport: (state, action: PayloadAction<any[]>) => {
      state.creatorReport = action.payload;
    },
    updateAdmin: (state, action: PayloadAction<any[]>) => {
      state.admin = action.payload;
    },
    updateCreator: (state, action: PayloadAction<any[]>) => {
      state.creator = action.payload;
    },
  },
});

// Export the actions
export const { updateCreatorReport, updateAdmin, updateCreator } =
  reportslice.actions;

// Export the reducer
export default reportslice.reducer;
