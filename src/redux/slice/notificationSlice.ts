// this is a redux state slice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NotificationState {
  value: number;
  text: string;
  type: "error" | "warning" | "info" | "success";
  direction: "left" | "right" | "top" | "bottom";
}

const initialState: NotificationState = {
  value: 0,
  text: undefined,
  type: undefined,
  direction: undefined,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    emitNotification: (
      state,
      action: PayloadAction<Omit<NotificationState, "value">>
    ) => {
      state.value = state.value + 1;
      state.text = action.payload?.text;
      state.type = action.payload?.type;
      state.direction = action.payload?.direction;
    },
  },
});

// Action creators are generated for each case reducer function
export const { emitNotification } = notificationSlice.actions;

const notificationReducer = notificationSlice.reducer;

export default notificationReducer;
