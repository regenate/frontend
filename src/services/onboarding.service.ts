import { AnyAction } from "@reduxjs/toolkit";
import { GlobalUrls } from "enums/GlobalUrls";
import { RoleEnum } from "enums/role";
import { OriginModel } from "models/original";
import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import {
  onboardingUpdateOrigin,
  onboardingUpdateRole,
} from "redux/slice/userSlice";
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
      await request.response.data;

      dispatch(onboardingUpdateRole(data));
      NotificationService.newNotificationDispatch(dispatch, {
        type: "success",
        text: `${t("role.successful")}`,
      });

      navigate(`/${GlobalUrls.origin}`, { replace: true });
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

  public static async updateOriginDispatch(
    data: OriginModel,
    dispatch: Dispatch<AnyAction>,
    navigate: NavigateFunction,
    setReportProgress: SetReportProgressType,
    t: any
  ) {
    try {
      setReportProgress("inProgress");
      const request = await OnboardingApi.updateOrigin(data);
      await request.response.data;

      dispatch(onboardingUpdateOrigin(data));

      NotificationService.newNotificationDispatch(dispatch, {
        type: "success",
        text: `${t("origin.successful")}`,
      });
      navigate(`/${GlobalUrls.expertise}`, { replace: true });
    } catch (error) {
      setReportProgress("failed");
      NotificationService.newNotificationDispatch(dispatch, {
        type: "error",
        text: `${t("origin.failed")}`,
      });

      throw error;
    } finally {
      setReportProgress("done");
    }
  }
}
