import { Cancel } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";
import homePageImg from "assets/image/homePageImg.svg";
import profileImg from "assets/image/profileImg.svg";
import { HomePageRightIcon } from "assets/svg/icons";
import { useTranslation } from "react-i18next";
import styles from "./Landing.module.scss";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.landing}>
      {/* <div className={styles.left}>
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
      </div> */}

      {/*My code starts here */}
      <div className={styles.left}>
        <div className={styles.landingModule}>
          <h2>{t("landing.title")}</h2>
          <div className={styles.landingModuleIcon}>
            <Cancel />
          </div>
        </div>

        <div className={styles.landingModuleitems}>
          <h6>{t("landing.setting")}</h6>
          <p>{t("landing.completed")}</p>
        </div>
        <LinearProgress
          variant="determinate"
          value={100}
          className="VolumeBar"
          sx={{
            width: `348px`,
            height: `5px`,
            borderRadius: `5px`,
            backgroundColor: `gray`,
            "& .MuiLinearProgress-bar": {
              backgroundColor: `#077f7f`,
            },
          }}
        />

        <div className={styles.radio_buttons}>
          <input type="checkbox" id="checkbox1" />
          <label htmlFor="checkbox1" className={styles.labelCheckBox1}>
          {t("landing.verify")}
          </label>
          <br />
          <input type="checkbox" id="checkbox2" />
          <label htmlFor="checkbox2" className={styles.labelCheckBox2}>
          {t("landing.experience")}
          </label>
          <br />
          <input type="checkbox" id="checkbox3" />
          <label htmlFor="checkbox3" className={styles.labelCheckBox3}>
          {t("landing.book")}
            <span> {t("landing.network")}- Learn/network with mentors</span>
          </label>
        </div>

        <div className={styles.imageContainer}>
          <img
            className={styles.imageContainerProfile}
            src={profileImg}
            alt=""
          />
          <input type="text" placeholder="what would you like to share?" />
        </div>

        <h2 id={styles.centerHeader}>{t("landing.updates")}</h2>
        <div className={styles.center}>
          <div className={styles.centerItems}>
            <h2>{t("landing.connect")}</h2>
            <p>
            {t("landing.get_started")}
            </p>
            <button>{t("landing.discover_button")}</button>
          </div>

          <div className={styles.centerImage}>
            <img src={homePageImg} alt="" />
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <h4>{t("landing.mentors_for_you")}</h4>
        <p>
        {t("landing.need_help")}
        </p>
        <button>
          <div className={styles.HomePageRightIcon}>
            <HomePageRightIcon />
          </div>
          Get match
        </button>
      </div>
    </div>
  );
};

export default Landing;
