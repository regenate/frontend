import { Cancel } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";
import homePageImg from "assets/image/homePageImg.svg";
import profileImg from "assets/image/profileImg.svg";
import { HomePageRightIcon } from "assets/svg/icons";
import { GlobalUrls } from "enums/GlobalUrls";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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
          <h2>Let's Start with the basics</h2>
          <div className={styles.landingModuleIcon}>
            <Cancel />
          </div>
        </div>

        <div className={styles.landingModuleitems}>
          <h6>Get more by setting up a profile you love</h6>
          <p>67% completed</p>
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
            Verify email
          </label>
          <br />
          <input type="checkbox" id="checkbox2" />
          <label htmlFor="checkbox2" className={styles.labelCheckBox2}>
            Fill up your experience level
          </label>
          <br />
          <input type="checkbox" id="checkbox3" />
          <label htmlFor="checkbox3" className={styles.labelCheckBox3}>
            Book your first session
            <span> - Learn/network with mentors</span>
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

        <h2 id={styles.centerHeader}>Recent updates</h2>
        <div className={styles.center}>
          <div className={styles.centerItems}>
            <h2>Connect and grow</h2>
            <p>
              To get started, find a mentor that suits your needs and send a
              connection request. Your activity will appear here.
            </p>
            <button>Discover mentors</button>
          </div>

          <div className={styles.centerImage}>
            <img src={homePageImg} alt="" />
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <h4>Mentors for you</h4>
        <p>
          Need help? Our wizard helps you find the right mentor just for you.
        </p>
        <Link to={`/${GlobalUrls.mentor}`}>
          <button>
            <div className={styles.HomePageRightIcon}>
              <HomePageRightIcon />
            </div>
            Get match
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
