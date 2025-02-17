import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object
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


interface userProps {
  content_creator_type: string | null;
  content_to_view: [] | null;
  full_name: string;
  country: string | null;
  createdAt: string;
  description: string;
  email: string;
  fcm_tokens: [] | null;
  name?: string; // name is optional as it will be derived from full_name
  id: number;
  image: string | null;
  is_phone_verified: boolean;
  is_verified: boolean;
  noOfMembers: number | null;
  noOfPosts: number | null;
  password: string;
  phone_number: string;
  status: string;
  subscription_plan: string;
  user_type: string;
  username: string;
  verification_type: string;
  wallet_balance: string;
}

// Initial state with an array of userProps and top-level status and user_type
const initialState = {
  usersAll: [] as userProps[], 
  usersInvestor: [] as userProps[],
  usersFan: [] as userProps[],
  usersCreator: [] as userProps[],
  userPost: [] as any,
  userProfile: {} as any,
  allCount: 0 as number,
  investorCount: 0 as number,
  creatorCount: 0 as number,
  fanCount: 0 as number,
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
export const usersOnboardedSlice = createSlice({
  name: "usersOnboarded",
  initialState,
  reducers: {
    updateUsersAll: (
      state,
      action: PayloadAction<userProps[]> // Incoming array of users
    ) => {
      state.usersAll = action.payload.map((user) => ({
        ...user, // Spread the incoming user data
        name: user.full_name, // Set 'name' as 'full_name'
      }));
    },
    updateUsersInvestor: (
      state,
      action: PayloadAction<userProps[]> // Incoming array of users
    ) => {
      state.usersInvestor = action.payload.map((user) => ({
        ...user, // Spread the incoming user data
        name: user.full_name, // Set 'name' as 'full_name'
      }));
    },
    updateUsersFan: (
      state,
      action: PayloadAction<userProps[]> // Incoming array of users
    ) => {
      state.usersFan = action.payload.map((user) => ({
        ...user, // Spread the incoming user data
        name: user.full_name, // Set 'name' as 'full_name'
      }));
    },
    updateUsersCreator: (
      state,
      action: PayloadAction<userProps[]> // Incoming array of users
    ) => {
      state.usersCreator = action.payload.map((user) => ({
        ...user, // Spread the incoming user data
        name: user.full_name, // Set 'name' as 'full_name'
      }));
    },
    updatePost: (state, action: PayloadAction<any>) => {
      state.userPost = action.payload;
    },
    updateUserProfile: (state, action: PayloadAction<any>) => {
      state.userProfile = action.payload;
    },
    updatePaginationUsers: (state, action: PayloadAction<PaginationProps>) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
    updateAllCount: (state, action: PayloadAction<number>) => {
     state.allCount = action.payload;
    },
    updateCreatorCount: (state, action: PayloadAction<number>) => {
      state.creatorCount = action.payload;
     },
     updateFanCount: (state, action: PayloadAction<number>) => {
      state.fanCount = action.payload;
     },
     updateInvestorCount: (state, action: PayloadAction<number>) => {
      state.investorCount = action.payload;
     },
  },
});

// Export the actions
export const {
  updateUsersAll,
  updateUsersInvestor,
  updateUsersFan,
  updateUsersCreator,
  updatePost,
  updateUserProfile,
  updatePaginationUsers,
  updateAllCount, updateCreatorCount, updateFanCount, updateInvestorCount
} = usersOnboardedSlice.actions;

// Export the reducer
export default usersOnboardedSlice.reducer;
