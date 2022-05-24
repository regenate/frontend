// this is a redux state slice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoleEnum } from "enums/role";
import { OriginModel } from "models/original";
import { UserModel } from "models/user";

export interface UserState {
  user: UserModel;
  role: RoleEnum;
  origin: OriginModel;
}

const initialState: UserState = {
  user: undefined,
  role: RoleEnum.none,
  origin: undefined,
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
    onboardingUpdateOrigin: (state, action: PayloadAction<OriginModel>) => {
      state.origin = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authUpdateUser, onboardingUpdateRole, onboardingUpdateOrigin } =
  userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
