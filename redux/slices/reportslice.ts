import { PaginationProps } from "@/utils/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object

const initialState = {
  creatorReport: [] as any[],
  admin: [] as any[],
  creator: [] as any[],
  reports: [] as any[],
  activeReport: {} as any,
  creatorData: {} as any,
  pagination: {
    hasNextPage: false as boolean,
    hasPrevPage: false as boolean,
    limit: 0 as number,
    nextPage: null as number | null,
    offset: 0 as number,
    page: 1 as number,
    pagingCounter: 0 as number,
    prevPage: null as number | null,
    totalDocs: 0 as number,
    totalPages: 0 as number,
  },
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
    updatePaginationReport: (state, action: PayloadAction<PaginationProps>) => {
        state.pagination = { ...state.pagination, ...action.payload };
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
  updatePaginationReport
} = reportslice.actions;

// Export the reducer
export default reportslice.reducer;
