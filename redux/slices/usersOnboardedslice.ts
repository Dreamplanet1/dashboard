import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object
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
  usersAll: [] as userProps[], // Array of users
  usersInvestor: [] as userProps[],
  usersFan: [] as userProps[],
  usersCreator: [] as userProps[],
  userPost: [] as any,
  userProfile: {} as any,
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
      state.usersAll = action.payload.map((user) => ({
        ...user, // Spread the incoming user data
        name: user.full_name, // Set 'name' as 'full_name'
      }));
    },
    updateUsersFan: (
      state,
      action: PayloadAction<userProps[]> // Incoming array of users
    ) => {
      state.usersAll = action.payload.map((user) => ({
        ...user, // Spread the incoming user data
        name: user.full_name, // Set 'name' as 'full_name'
      }));
    },
    updateUsersCreator: (
      state,
      action: PayloadAction<userProps[]> // Incoming array of users
    ) => {
      state.usersAll = action.payload.map((user) => ({
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
} = usersOnboardedSlice.actions;

// Export the reducer
export default usersOnboardedSlice.reducer;
