import { AnyAction } from "@reduxjs/toolkit";
import { GlobalUrls } from "enums/GlobalUrls";
import { RoleEnum } from "enums/role";
import { AvatarModel } from "models/avatar";
import { BackgroundModel } from "models/background";
import { BioModel } from "models/bio";
import { ExpertiseModel } from "models/expertise";
import { OriginModel } from "models/origin";
import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import {
  onboardingUpdateAvatar,
  onboardingUpdateBackground,
  onboardingUpdateBio,
  onboardingUpdateExpertise,
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

  public static async updateExpertiseDispatch(
    data: ExpertiseModel,
    dispatch: Dispatch<AnyAction>,
    navigate: NavigateFunction,
    setReportProgress: SetReportProgressType,
    t: any
  ) {
    try {
      setReportProgress("inProgress");
      const request = await OnboardingApi.updateExpertise(data);
      await request.response.data;

      dispatch(onboardingUpdateExpertise(data));

      NotificationService.newNotificationDispatch(dispatch, {
        type: "success",
        text: `${t("expertise.successful")}`,
      });
      navigate(`/${GlobalUrls.background}`, { replace: true });
    } catch (error) {
      setReportProgress("failed");
      NotificationService.newNotificationDispatch(dispatch, {
        type: "error",
        text: `${t("expertise.failed")}`,
      });

      throw error;
    } finally {
      setReportProgress("done");
    }
  }

  public static async updateBackgroundDispatch(
    data: BackgroundModel,
    dispatch: Dispatch<AnyAction>,
    navigate: NavigateFunction,
    setReportProgress: SetReportProgressType,
    t: any
  ) {
    try {
      setReportProgress("inProgress");
      const request = await OnboardingApi.updateBackground(data);
      await request.response.data;

      dispatch(onboardingUpdateBackground(data));

      NotificationService.newNotificationDispatch(dispatch, {
        type: "success",
        text: `${t("background.successful")}`,
      });
      navigate(`/${GlobalUrls.avatar}`, { replace: true });
    } catch (error) {
      setReportProgress("failed");
      NotificationService.newNotificationDispatch(dispatch, {
        type: "error",
        text: `${t("background.failed")}`,
      });

      throw error;
    } finally {
      setReportProgress("done");
    }
  }

  public static async updateAvatarDispatch(
    data: AvatarModel,
    dispatch: Dispatch<AnyAction>,
    navigate: NavigateFunction,
    setReportProgress: SetReportProgressType,
    t: any
  ) {
    try {
      setReportProgress("inProgress");
      const request = await OnboardingApi.updateAvatar(data);
      await request.response.data;

      dispatch(onboardingUpdateAvatar(data));

      NotificationService.newNotificationDispatch(dispatch, {
        type: "success",
        text: `${t("avatar.successful")}`,
      });
      navigate(`/${GlobalUrls.bio}`, { replace: true });
    } catch (error) {
      setReportProgress("failed");
      NotificationService.newNotificationDispatch(dispatch, {
        type: "error",
        text: `${t("avatar.failed")}`,
      });

      throw error;
    } finally {
      setReportProgress("done");
    }
  }

  public static async updateBioDispatch(
    data: BioModel,
    dispatch: Dispatch<AnyAction>,
    navigate: NavigateFunction,
    setReportProgress: SetReportProgressType,
    t: any
  ) {
    try {
      setReportProgress("inProgress");
      const request = await OnboardingApi.updateBio(data);
      await request.response.data;

      dispatch(onboardingUpdateBio(data));

      NotificationService.newNotificationDispatch(dispatch, {
        type: "success",
        text: `${t("bio.successful")}`,
      });
      navigate(`/${GlobalUrls.home}`, { replace: true });
    } catch (error) {
      setReportProgress("failed");
      NotificationService.newNotificationDispatch(dispatch, {
        type: "error",
        text: `${t("bio.failed")}`,
      });

      throw error;
    } finally {
      setReportProgress("done");
    }
  }
}
