import { PaginationProps } from "@/utils/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object

const initialState = {
  acceptedAdmin: [] as any[],
  pendingAdmin: [] as any[],
  adminRoles: [] as any[],
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
  paginationPending: {
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
     updatePaginationAdminSetting: (state, action: PayloadAction<PaginationProps>) => {
            state.pagination = { ...state.pagination, ...action.payload };
          },
          updatePaginationPendingAdminSetting: (state, action: PayloadAction<PaginationProps>) => {
            state.paginationPending = { ...state.pagination, ...action.payload };
          },
   
  },
});

// Export the actions
export const {
  updateacceptedAdmin,
  updatependingAdmin,
  updateRoles,
  updatePaginationAdminSetting,
  updatePaginationPendingAdminSetting
  
} = adminsettingslice.actions;

// Export the reducer
export default adminsettingslice.reducer;
