import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  offset: number;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}


// Define the interface for a single user object

const initialState = {
  allPerformanceCreator: [] as any[],
  allPerformanceFan: [] as any[],
  allPerformanceInvestor: [] as any[],
  stats: {} as any,
  creatorPerformance: {} as any,
  fanInvestorPerformance: {} as any,
  activeUser: {} as any,
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
  paginationCreator: {
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
   updatePaginationPerformance: (state, action: PayloadAction<PaginationProps>) => {
         state.pagination = { ...state.pagination, ...action.payload };
       },
       updatePaginationCreator: (state, action: PayloadAction<PaginationProps>) => {
        state.paginationCreator = { ...state.pagination, ...action.payload };
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
  updateFanInvestorPerformance,
  updatePaginationPerformance,
  updatePaginationCreator,
  
} = performanceslice.actions;

// Export the reducer
export default performanceslice.reducer;
