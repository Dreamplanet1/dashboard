import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object
interface broadcastProps {
  admin_id: number | null;
  challenge_id: null;
  content_type: null;
  createdAt: string | null;
  forum_id: null;
  id: number;
  is_broadcast: boolean;
  link: string;
  media_url: string[];
  shared_feed: null;
  text_content: string;
  title: string;
  updatedAt: string;
  user_id: null;
}

const initialState = {
  broadcastAll: [] as broadcastProps[],
  broadcastEdit: {} as broadcastProps,
};

// Redux slice
export const broadcastslice = createSlice({
  name: "broadcast",
  initialState,
  reducers: {
    updateBroadcastAll: (state, action: PayloadAction<broadcastProps[]>) => {
      state.broadcastAll = action.payload;
    },
    updateBroadcastEdit: (state, action: PayloadAction<broadcastProps>) => {
      state.broadcastEdit = action.payload;
    },
  },
});

// Export the actions
export const { updateBroadcastAll, updateBroadcastEdit } =
  broadcastslice.actions;

// Export the reducer
export default broadcastslice.reducer;
