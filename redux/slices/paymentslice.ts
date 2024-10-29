import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object

const initialState = {
  subscriptioncreator: [] as any[],
  subscriptionfan: [] as any[],
  subscriptioninvestor: [] as any[],
  stats: {} as any,
  history: [] as any[],
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
  },
});

// Export the actions
export const {
  updateSubscriptioncreator,
  updateSubscriptioninvestor,
  updateSubscriptionfan,
  updateStats,
  updateHistory,
} = paymentslice.actions;

// Export the reducer
export default paymentslice.reducer;
