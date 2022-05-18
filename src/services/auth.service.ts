import { AnyAction } from "@reduxjs/toolkit";
import { LoginModel } from "models/login";
import { UserModel } from "models/user";
import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { authUpdateUser } from "redux/slice/userSlice";
import { SetReportProgressType } from "utils/types/ReportProgress";
import { AuthApi } from "./api/auth.api";

export class AuthService {
  public static async loginDispatch(
    data: LoginModel,
    dispatch: Dispatch<AnyAction>,
    navigate: NavigateFunction,
    setReportProgress: SetReportProgressType
  ) {
    try {
      setReportProgress("inProgress");
      const request = await AuthApi.signIn(data);
      const response = await request.json();

      dispatch(authUpdateUser(UserModel.fromJson(response)));
    } catch (error) {
      setReportProgress("failed");
      throw error;
    } finally {
      setReportProgress("done");
      navigate("/", { replace: true });
    }
  }
}
