import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { emitNotification } from "redux/slice/notificationSlice";

export class NotificationService {
  public static async newNotificationDispatch(
    dispatch: Dispatch<AnyAction>,
    data?: {
      text?: string;
      type?: "error" | "warning" | "info" | "success";
      direction?: "left" | "right" | "top" | "bottom";
    }
  ) {
    dispatch(
      emitNotification({
        direction: data?.direction,
        text: data?.text,
        type: data?.type,
      })
    );
  }
}
