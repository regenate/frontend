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
  name: "user",
  initialState,
  reducers: {
    authUpdateUser: (state, action: PayloadAction<UserModel>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authUpdateUser } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
