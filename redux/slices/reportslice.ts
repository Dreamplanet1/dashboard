import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object

const initialState = {
  creatorReport: [] as any[],
  admin: [] as any[],
  creator: [] as any[],
  reports: [] as any[],
  activeReport: {} as any,
  creatorData: {} as any,
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
    updateReports: (state, action: PayloadAction<any[]>) => {
      state.reports = action.payload;
    },
    updateActiveReport: (state, action: PayloadAction<any[]>) => {
      state.activeReport = action.payload;
    },
    updateCreatorData: (state, action: PayloadAction<any[]>) => {
      state.creatorData = action.payload;
    },
  },
});

// Export the actions
export const {
  updateCreatorReport,
  updateAdmin,
  updateCreator,
  updateReports,
  updateActiveReport,
  updateCreatorData,
} = reportslice.actions;

// Export the reducer
export default reportslice.reducer;
