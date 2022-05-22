import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer, { CounterState } from "redux/slice/counterSlice";
import persistReducer from "reduxjs-toolkit-persist/lib/persistReducer";
import storage from "reduxjs-toolkit-persist/lib/storage";
import notificationReducer, {
  NotificationState,
} from "./slice/notificationSlice";
import userReducer, { UserState } from "./slice/userSlice";

export interface RootState {
  counterReducer: CounterState;
  userReducer: UserState;
  notificationReducer: NotificationState;
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer"],
};

const reducers = combineReducers<RootState>({
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

//export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
