// this is a redux state slice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "models/user";

export interface UserState {
  user: UserModel;
}

const initialState: UserState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    authUpdateUser: (state, action: PayloadAction<UserModel>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authUpdateUser } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
