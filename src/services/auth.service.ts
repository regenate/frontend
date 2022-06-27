import { AnyAction } from "@reduxjs/toolkit";
import { GlobalUrls } from "enums/GlobalUrls";
import { LoginModel } from "models/login";
import { RegisterModel } from "models/register";
import { UserModel } from "models/user";
import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { authResetUser, authUpdateUser } from "redux/slice/userSlice";
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
    dispatch(authResetUser());
  }

  public static async registerDispatch(
    data: RegisterModel,
    dispatch: Dispatch<AnyAction>,
    navigate: NavigateFunction,
    setReportProgress: SetReportProgressType,
    t: any
  ) {
    try {
      setReportProgress("inProgress");
      const request = await AuthApi.register(data);
      const responseData = UserModel.fromJson(request.response.data);

      dispatch(authUpdateUser(UserModel.fromJson(responseData)));
      NotificationService.newNotificationDispatch(dispatch, {
        type: "success",
        text: `${t("register.successful")}`,
      });
      navigate(`/${GlobalUrls.role}`, { replace: true });
    } catch (error) {
      setReportProgress("failed");
      NotificationService.newNotificationDispatch(dispatch, {
        type: "error",
        text: `${t("register.failed")}`,
      });
      dispatch(authUpdateUser(undefined));
      throw error;
    } finally {
      setReportProgress("done");
    }
  }
}
