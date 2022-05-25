import {
  ChevronLeftIconSvg,
  LivechatFalseIconSvg,
  StarIconSvg,
} from "assets/svg/icons";
import Community from "components/community/Community";
import ProgressOverlay from "components/progress-overlay/ProgressOverlay";
import { GlobalUrls } from "enums/GlobalUrls";
import { BioModel } from "models/bio";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { OnboardingService } from "services/onboarding.service";
import { ReportProgressType } from "utils/types/ReportProgress";
import styles from "./Bio.module.scss";

const Bio = (props: any) => {
  const [userBio, setUserBio] = useState<string>(undefined);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reportProgress, setReportProgress] =
    useState<ReportProgressType>("none");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const inputData: BioModel = {
      bio: userBio,
    };

    await OnboardingService.updateBioDispatch(
      inputData,
      dispatch,
      navigate,
      setReportProgress,
      t
    );
  };

  const handleUserBio = (event: any) => {
    setUserBio(event.target.value);
  };

  return (
    <div className={styles.bio}>
      {reportProgress === "inProgress" && <ProgressOverlay />}
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.step}>{t("bio.step_5")}</div>
            <div className={styles.text}>{t("bio.introduction_approach")}</div>
          </div>

          <div className={styles.form}>
            <form className={styles.bioForm} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="userBio" className={styles.userBioLabel}>
                  {t("bio.sample_bio")}
                </label>
                <textarea
                  className={styles.userBio}
                  id="userBio"
                  name="userBio"
                  value={userBio}
                  onChange={handleUserBio}
                  placeholder={t("bio.bio_text")}
                />
              </div>

              {/* {password.length <= 8 && submit && (
        <p>Password cannot be less than 8 characters</p>
      )} */}
              <div className={styles.buttons}>
                <Link to={`/${GlobalUrls.avatar}`}>
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
            Icon={StarIconSvg}
            title={t("bio.community.title")}
            text={t("bio.community.body")}
          />
          <div className={styles.liveChat}>
            <LivechatFalseIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
