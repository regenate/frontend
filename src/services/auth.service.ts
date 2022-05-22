import { AnyAction } from "@reduxjs/toolkit";
import { GlobalUrls } from "enums/GlobalUrls";
import { LoginModel } from "models/login";
import { UserModel } from "models/user";
import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { authUpdateUser } from "redux/slice/userSlice";
import { SetReportProgressType } from "utils/types/ReportProgress";
import { AuthApi } from "./api/auth.api";
import { NotificationService } from "./notification.service";

export class AuthService {
  public static async loginDispatch(
    data: LoginModel,
    dispatch: Dispatch<AnyAction>,
    navigate: NavigateFunction,
    setReportProgress: SetReportProgressType,
    t: any
  ) {
    try {
      setReportProgress("inProgress");
      const request = await AuthApi.signIn(data);
      const responseData = UserModel.fromJson(request.response.data);

      dispatch(authUpdateUser(UserModel.fromJson(responseData)));
      NotificationService.newNotificationDispatch(dispatch, {
        type: "success",
        text: `${t("login.successful")}`,
      });
      navigate(`/${GlobalUrls.home}`, { replace: true });
    } catch (error) {
      setReportProgress("failed");
      NotificationService.newNotificationDispatch(dispatch, {
        type: "error",
        text: `${t("login.failed")}`,
      });
      dispatch(authUpdateUser(undefined));
      throw error;
    } finally {
      setReportProgress("done");
    }
  }

  public static async logoutDispatch(dispatch: Dispatch<AnyAction>) {
    dispatch(authUpdateUser(undefined));
    NotificationService.newNotificationDispatch(dispatch, {
      type: "info",
      text: "user logged out",
    });
  }
}
