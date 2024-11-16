import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object

const initialState = {
  allPerformanceCreator: [] as any[],
  allPerformanceFan: [] as any[],
  allPerformanceInvestor: [] as any[],
  stats: {} as any,
  creatorPerformance: {} as any,
  fanInvestorPerformance: {} as any,
  activeUser: {} as any,
};

// Redux slice
export const performanceslice = createSlice({
  name: "performance",
  initialState,
  reducers: {
    updateAllPerformanceCreator: (state, action: PayloadAction<any[]>) => {
      state.allPerformanceCreator = action.payload;
    },
    updateAllPerformanceFan: (state, action: PayloadAction<any[]>) => {
      state.allPerformanceFan = action.payload;
    },
    updateAllPerformanceInvestor: (state, action: PayloadAction<any[]>) => {
      state.allPerformanceInvestor = action.payload;
    },
    updateStats: (state, action: PayloadAction<any>) => {
        state.stats = action.payload
    },
    updateCreatorPerformance: (state, action: PayloadAction <any>) => {
        state.creatorPerformance = action.payload
    },
    updateActiveUser: (state, action: PayloadAction <any>) => {
        state.activeUser = action.payload
    },
    updateFanInvestorPerformance: (state, action: PayloadAction <any>) => {
        state.fanInvestorPerformance = action.payload
    },
   
  },
});

// Export the actions
export const {
  updateAllPerformanceCreator,
  updateAllPerformanceInvestor,
  updateAllPerformanceFan,
  updateStats,
  updateCreatorPerformance,
  updateActiveUser,
  updateFanInvestorPerformance
  
} = performanceslice.actions;

// Export the reducer
export default performanceslice.reducer;
