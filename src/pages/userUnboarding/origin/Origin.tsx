import {
  ChevronLeftIconSvg,
  LivechatFalseIconSvg,
  StarIconSvg,
} from "assets/svg/icons";
import Community from "components/community/Community";
import Countries from "components/formComponents/Countries";
import Languages from "components/formComponents/Languages";
import ProgressOverlay from "components/progress-overlay/ProgressOverlay";
import { OriginModel } from "models/original";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { OnboardingService } from "services/onboarding.service";
import { ReportProgressType } from "utils/types/ReportProgress";
import styles from "./Origin.module.scss";

const Origin = (props: any) => {
  const [country, setCountry] = useState<string>(undefined);
  const [language, setLanguage] = useState<string>(undefined);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reportProgress, setReportProgress] =
    useState<ReportProgressType>("none");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const inputData: OriginModel = {
      country: country,
      language: language,
    };

    await OnboardingService.updateOriginDispatch(
      inputData,
      dispatch,
      navigate,
      setReportProgress,
      t
    );
  };

  const handleCountry = (event: any) => {
    setCountry(event.target.value);
  };

  const handleLanguage = (event: any) => {
    setLanguage(event.target.value);
  };

  return (
    <div className={styles.origin}>
      {reportProgress === "inProgress" && <ProgressOverlay />}
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.step}> {t("origin.step_1")}</div>
            <div className={styles.text}>{t("origin.origin_story")}</div>
          </div>

          <div className={styles.form}>
            <form className={styles.originForm} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="country" className={styles.countryLabel}>
                  {t("origin.current_country")}
                </label>
                <select
                  id="country"
                  name="country"
                  className={styles.country}
                  value={country}
                  onChange={handleCountry}
                >
                  <Countries />
                </select>

                {/* {!email && submit && <p>Enter a valid email address</p>} */}
              </div>
              <div>
                <label htmlFor="language" className={styles.languageLabel}>
                  {t("origin.language_speak")}
                </label>
                <select
                  name="language"
                  id="language"
                  onChange={handleLanguage}
                  value={language}
                  className={styles.language}
                >
                  <Languages />
                </select>
              </div>

              {/* {password.length <= 8 && submit && (
        <p>Password cannot be less than 8 characters</p>
      )} */}
              <div className={styles.buttons}>
                <Link to="/">
                  <ChevronLeftIconSvg />
                  <input
                    type="button"
                    className={styles.backButton}
                    value={t("general.back")}
                  />
                </Link>

                <input type="submit" value={t("general.continue")} />
              </div>
            </form>
          </div>
        </div>

        <div className={styles.right}>
          <Community
            Icon={StarIconSvg}
            title={t("origin.community.title")}
            text={t("origin.community.body")}
          />
          <div className={styles.liveChat}>
            <LivechatFalseIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Origin;
