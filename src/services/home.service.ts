import { AnyAction } from "@reduxjs/toolkit";
import { UserComplete } from "models/user-complete";
import { Dispatch } from "react";
import { homeUpdateUserComplete } from "redux/slice/userSlice";
import { SetReportProgressType } from "utils/types/ReportProgress";
import { HomeApi } from "./api/home.api";

export class HomeService {
  public static async getHomeDispatch(
    dispatch: Dispatch<AnyAction>,
    setReportProgress: SetReportProgressType
  ) {
    try {
      setReportProgress("inProgress");
      const request = await HomeApi.getHome();
      const responseData = await request.response.data;

      dispatch(homeUpdateUserComplete(UserComplete.fromJson(responseData)));
    } catch (error) {
      setReportProgress("failed");

      throw error;
    } finally {
      setReportProgress("done");
    }
  }
}
