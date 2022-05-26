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
  const [preview, setPreview] = useState<string>(undefined);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reportProgress, setReportProgress] =
    useState<ReportProgressType>("none");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const file = formData.get("uploadPhoto") as File;

    try {
      console.warn(file);
      const fileBas64 = (await toBase64(file)) as string;

      const inputData: AvatarModel = {
        data: fileBas64,
        mime: file.type,
        filename: file?.name,
      };
      await OnboardingService.updateAvatarDispatch(
        inputData,
        dispatch,
        navigate,
        setReportProgress,
        t
      );
    } catch (error) {
      console.warn("error occured uploading image");
      return;
    }

    return;
  };

  const toBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const onSelectFile = async (e: any) => {
    // Select only single file
    const sFile: File =
      !e.target.files || e.target.files.length === 0
        ? undefined
        : e.target.files[0];

    try {
      if (sFile) {
        const fileBas64 = (await toBase64(sFile)) as string;
        setPreview(fileBas64);
      } else {
        setPreview(undefined);
      }
    } catch (error) {
      console.warn("error occured choosing image");
      return;
    }
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
                  {preview ? <img src={preview} alt="avatar" /> : <AddPhoto />}
                </label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  name="uploadPhoto"
                  id="uploadPhoto"
                  accept="image/*"
                  onChange={onSelectFile}
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
