import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default storage (localStorage)
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { usersOnboardedSlice } from "./slices/usersOnboardedslice";
import { broadcastslice } from "./slices/broadcastslice";
import { campaignslice } from "./slices/campaignslice";
import { challengeslice } from "./slices/challengeslice";
// Import your slice correctly

// Combine all reducers
const rootReducer = combineReducers({
  usersOnboarded: usersOnboardedSlice.reducer,
  broadcast: broadcastslice.reducer,
  campaign: campaignslice.reducer,
  challenge: challengeslice.reducer,
});

// Persist configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
