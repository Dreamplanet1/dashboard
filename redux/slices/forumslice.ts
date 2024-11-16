import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object

const initialState = {
  allForums: [] as any[],
  forumMembers: [] as any[],
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
  
  },
});

// Export the actions
export const {
  updateAllForums,
  updateForumMembers
 
} = forumslice.actions;

// Export the reducer
export default forumslice.reducer;
