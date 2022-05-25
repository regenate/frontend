import {
  BriefcaseIconSvg,
  ChevronLeftIconSvg,
  LivechatFalseIconSvg,
} from "assets/svg/icons";
import Community from "components/community/Community";
import ProgressOverlay from "components/progress-overlay/ProgressOverlay";
import { GlobalUrls } from "enums/GlobalUrls";
import { BackgroundModel } from "models/background";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { OnboardingService } from "services/onboarding.service";
import { ReportProgressType } from "utils/types/ReportProgress";
import styles from "./Background.module.scss";

const Background = (props: any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reportProgress, setReportProgress] =
    useState<ReportProgressType>("none");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const inputData: BackgroundModel = {
      figmaPortfolioUrl: formData.get("figma") as string,
      gitHubUrl: formData.get("github") as string,
      linkedlnUrl: formData.get("linkedin") as string,
    };

    await OnboardingService.updateBackgroundDispatch(
      inputData,
      dispatch,
      navigate,
      setReportProgress,
      t
    );
  };

  return (
    <div className={styles.background}>
      {reportProgress === "inProgress" && <ProgressOverlay />}
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.step}>{t("background.step_3")}</div>
            <div className={styles.text}>{t("background.super_power")}</div>
          </div>

          <div className={styles.form}>
            <form className={styles.originForm} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="figma" className={styles.figmaLabel}>
                  {t("background.figma_portfolio")}
                </label>
                <input
                  className={styles.figma}
                  type="text"
                  name="figma"
                  id="figma"
                  placeholder=""
                />

                {/* {!email && submit && <p>Enter a valid email address</p>} */}
              </div>
              <div>
                <label htmlFor="github" className={styles.githubLabel}>
                  {t("background.gitHub_url")}
                </label>
                <input
                  className={styles.github}
                  type="text"
                  name="github"
                  placeholder=""
                  id="github"
                />

                {/* {!email && submit && <p>Enter a valid email address</p>} */}
              </div>
              <div>
                <label htmlFor="linkedin" className={styles.linkedinLabel}>
                  {t("background.linkedln_url")}
                </label>
                <div className={styles.linkedIn}>
                  <input
                    className={styles.linkedin}
                    type="text"
                    name="linkedin"
                    id="linkedin"
                  />
                </div>
              </div>

              {/* {password.length <= 8 && submit && (
        <p>Password cannot be less than 8 characters</p>
      )} */}
              <div className={styles.buttons}>
                <Link to={`/${GlobalUrls.expertise}`}>
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
            Icon={BriefcaseIconSvg}
            title={t("background.community.title")}
            text={t("background.community.body")}
          />
          <div className={styles.liveChat}>
            <LivechatFalseIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
