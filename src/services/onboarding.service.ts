import { AnyAction } from "@reduxjs/toolkit";
import { GlobalUrls } from "enums/GlobalUrls";
import { RoleEnum } from "enums/role";
import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { onboardingUpdateRole } from "redux/slice/userSlice";
import { SetReportProgressType } from "utils/types/ReportProgress";
import { OnboardingApi } from "./api/onboarding.api";
import { NotificationService } from "./notification.service";

export class OnboardingService {
  public static async chooseRoleDispatch(
    data: RoleEnum,
    dispatch: Dispatch<AnyAction>,
    navigate: NavigateFunction,
    setReportProgress: SetReportProgressType,
    t: any
  ) {
    try {
      setReportProgress("inProgress");
      const request = await OnboardingApi.chooseRole(data);
      const responseData = await request.response.data;

      dispatch(onboardingUpdateRole(RoleEnum.fromJson(responseData)));
      navigate(`/${GlobalUrls.step1}`, { replace: true });
    } catch (error) {
      setReportProgress("failed");
      NotificationService.newNotificationDispatch(dispatch, {
        type: "error",
        text: `${t("role.failed")}`,
      });

      throw error;
    } finally {
      setReportProgress("done");
    }
  }
}
