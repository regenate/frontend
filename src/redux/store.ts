import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "redux/slice/counterSlice";
import persistReducer from "reduxjs-toolkit-persist/lib/persistReducer";
import storage from "reduxjs-toolkit-persist/lib/storage";
import notificationReducer from "./slice/notificationSlice";
import userReducer from "./slice/userSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer"],
};
const reducers = combineReducers({
  counterReducer: counterReducer,
  userReducer: userReducer,
  notificationReducer: notificationReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
