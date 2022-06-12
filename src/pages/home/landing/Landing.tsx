import { LinearProgress } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Landing.module.scss";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.landing}>
      <div className={styles.left}>
        <h2>{t("home.landing.fill")}</h2>
        <div className={styles.percent_section}>
          <p>{t("home.landing.complete")}</p>
          <p>{t("home.landing.percent_complete")}</p>
        </div>
        <LinearProgress variant="determinate" value={60} />

        <div className={styles.radio_buttons}>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>
      </div>
      <div className={styles.right}>right</div>
    </div>
  );
};

export default Landing;
