import { BriefcaseIconSvg, ChevronLeftIconSvg } from "assets/svg/icons";
import Community from "components/community/Community";
import Experience from "components/formComponents/Experience";
import ExpertiseData from "components/formComponents/ExpertiseData";
import LiveChat from "components/liveChat/LiveChat";
import ProgressOverlay from "components/progress-overlay/ProgressOverlay";
import { ExperienceLevelEnum } from "enums/experience-level";
import { ExpertiseEnum } from "enums/expertise";
import { GlobalUrls } from "enums/GlobalUrls";
import { ExpertiseModel } from "models/expertise";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { OnboardingService } from "services/onboarding.service";
import { ReportProgressType } from "utils/types/ReportProgress";
import styles from "./Expertise.module.scss";

const Expertise = (props: any) => {
  const [expertise, setExpertise] = useState<ExpertiseEnum>(undefined);
  const [experience, setExperience] = useState<ExperienceLevelEnum>(undefined);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reportProgress, setReportProgress] =
    useState<ReportProgressType>("none");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const inputData: ExpertiseModel = {
      expertise: ExpertiseEnum.toEnum(expertise),
      experienceLevel: ExperienceLevelEnum.toEnum(experience),
    };

    await OnboardingService.updateExpertiseDispatch(
      inputData,
      dispatch,
      navigate,
      setReportProgress,
      t
    );
  };

  const handleExpertise = (event: any) => {
    setExpertise(event.target.value);
  };

  const handleExperience = (event: any) => {
    setExperience(event.target.value);
  };

  return (
    <div className={styles.expertise}>
      {reportProgress === "inProgress" && <ProgressOverlay />}
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.step}>{t("expertise.step_2")}</div>
            <div className={styles.text}>{t("expertise.super_power")}</div>
          </div>

          <div className={styles.form}>
            <form className={styles.originForm} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="expertise" className={styles.expertiseLabel}>
                  {t("expertise.what_expertise")}
                </label>
                <select
                  name="expertise"
                  id="expertise"
                  onChange={handleExpertise}
                  value={expertise}
                  className={styles.expertise}
                >
                  <ExpertiseData />
                </select>
              </div>
              <div>
                <label htmlFor="experience" className={styles.experienceLabel}>
                  {t("expertise.experience_level")}
                </label>
                <select
                  name="experience"
                  id="experience"
                  onChange={handleExperience}
                  value={experience}
                  className={styles.experience}
                >
                  <Experience />
                </select>
              </div>
              <div className={styles.buttons}>
                <Link to={`/${GlobalUrls.origin}`}>
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
            title={t("expertise.community.title")}
            text={t("expertise.community.body")}
          />
          <div className={styles.liveChat}>
            <LiveChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
