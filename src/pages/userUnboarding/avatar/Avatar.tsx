import { AddPhoto } from "assets/image/images";
import {
  CameraIconSvg,
  ChevronLeftIconSvg,
  LivechatFalseIconSvg,
} from "assets/svg/icons";
import Community from "components/community/Community";
import ProgressOverlay from "components/progress-overlay/ProgressOverlay";
import { GlobalUrls } from "enums/GlobalUrls";
import { AvatarModel } from "models/avatar";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { OnboardingService } from "services/onboarding.service";
import { ReportProgressType } from "utils/types/ReportProgress";
import styles from "./Avatar.module.scss";

const Avatar = (props: any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reportProgress, setReportProgress] =
    useState<ReportProgressType>("none");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    //TODO use correct image input
    const inputData: AvatarModel = undefined;

    await OnboardingService.updateAvatarDispatch(
      inputData,
      dispatch,
      navigate,
      setReportProgress,
      t
    );
  };

  return (
    <div className={styles.avatar}>
      {reportProgress === "inProgress" && <ProgressOverlay />}
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.step}>{t("avatar.step_4")}</div>
            <div className={styles.text}>{t("avatar.add_photo")}</div>
            <div className={styles.textSmall}>{t("avatar.favorite_photo")}</div>
          </div>

          <div className={styles.form}>
            <form className={styles.avatarForm} onSubmit={handleSubmit}>
              <div className={styles.imageUpload}>
                <label className={styles.imageLabel} htmlFor="uploadPhoto">
                  <AddPhoto />
                </label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  name="uploadPhoto"
                  id="uploadPhoto"
                  accept="image/*"
                />
              </div>

              <div className={styles.buttons}>
                <Link to={`/${GlobalUrls.background}`}>
                  <ChevronLeftIconSvg />
                  <input
                    type="button"
                    className={styles.backButton}
                    value="Back"
                  />
                </Link>
                <input type="submit" value="Continue" />
              </div>
            </form>
          </div>
        </div>

        <div className={styles.right}>
          <Community
            Icon={CameraIconSvg}
            title={t("avatar.community.title")}
            text={t("avatar.community.body")}
          />
          <div className={styles.liveChat}>
            <LivechatFalseIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
