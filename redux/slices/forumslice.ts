import { PaginationProps } from "@/utils/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object

const initialState = {
  allForums: [] as any[],
  forumMembers: [] as any[],
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
export const forumslice = createSlice({
  name: "forum",
  initialState,
  reducers: {
    updateAllForums: (state, action: PayloadAction<any[]>) => {
      state.allForums = action.payload;
    },
    updateForumMembers: (state, action: PayloadAction<any[]>) => {
        state.forumMembers = action.payload;
      },
       updatePaginationForum: (state, action: PayloadAction<PaginationProps>) => {
              state.pagination = { ...state.pagination, ...action.payload };
            },
  },
});

// Export the actions
export const {
  updateAllForums,
  updateForumMembers,
  updatePaginationForum
 
} = forumslice.actions;

// Export the reducer
export default forumslice.reducer;
