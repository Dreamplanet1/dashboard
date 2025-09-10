import { PaginationProps } from "@/utils/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object
interface challengeProps {
  createdAt: string;
  delete_after_duration: null | boolean;
  download_link: string;
  duration: string;
  entries: number;
  hashtag: string;
  id: number;
  images: string[];
  instructions: string;
  link: string;
  media_url: string[];
  name: string;
  price: string;
  status: string;
}

const initialState = {
  challengeAll: [] as challengeProps[],
  challengeEdit: {} as challengeProps,
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
export const challengeslice = createSlice({
  name: "challenge",
  initialState,
  reducers: {
    updateChallengeAll: (state, action: PayloadAction<challengeProps[]>) => {
      state.challengeAll = action.payload;
    },
    updateChallengeEdit: (state, action: PayloadAction<challengeProps>) => {
      state.challengeEdit = action.payload;
    },
     updatePaginationChallenge: (state, action: PayloadAction<PaginationProps>) => {
            state.pagination = { ...state.pagination, ...action.payload };
          },
  },
});

// Export the actions
export const { updateChallengeAll, updateChallengeEdit, updatePaginationChallenge } =
  challengeslice.actions;

// Export the reducer
export default challengeslice.reducer;
