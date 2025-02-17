import { PaginationProps } from "@/utils/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object

const initialState = {
  subscriptioncreator: [] as any[],
  subscriptionfan: [] as any[],
  subscriptioninvestor: [] as any[],
  stats: {} as any,
  history: [] as any[],
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
export const paymentslice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    updateSubscriptioncreator: (state, action: PayloadAction<any[]>) => {
      state.subscriptioncreator = action.payload;
    },
    updateSubscriptionfan: (state, action: PayloadAction<any[]>) => {
      state.subscriptionfan = action.payload;
    },
    updateSubscriptioninvestor: (state, action: PayloadAction<any[]>) => {
      state.subscriptioninvestor = action.payload;
    },
    updateStats: (state, action: PayloadAction<any[]>) => {
      state.stats = action.payload;
    },
    updateHistory: (state, action: PayloadAction<any[]>) => {
      state.history = action.payload;
    },
     updatePaginationPayment: (state, action: PayloadAction<PaginationProps>) => {
            state.pagination = { ...state.pagination, ...action.payload };
          },
  },
});

// Export the actions
export const {
  updateSubscriptioncreator,
  updateSubscriptioninvestor,
  updateSubscriptionfan,
  updateStats,
  updateHistory,
  updatePaginationPayment
} = paymentslice.actions;

// Export the reducer
export default paymentslice.reducer;
