// this is a redux state slice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoleEnum } from "enums/role";
import { UserModel } from "models/user";

export interface UserState {
  user: UserModel;
  role: RoleEnum;
}

const initialState: UserState = {
  user: undefined,
  role: RoleEnum.none,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authUpdateUser: (state, action: PayloadAction<UserModel>) => {
      state.user = action.payload;
    },
    onboardingUpdateRole: (state, action: PayloadAction<RoleEnum>) => {
      state.role = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authUpdateUser, onboardingUpdateRole } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
