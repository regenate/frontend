import { Cancel } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";
import React from "react";
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
          value={60}
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
          <label className={styles.radio_buttonsLabel}>
            <input type="checkbox" />
            Verify email
          </label>
          <label className={styles.radio_buttonsLabel}>
            <input type="checkbox" />
            Fill up your experience level
          </label>
          <label className={styles.radio_buttonsLabel}>
            <input type="checkbox" />
            Book your first session
            <span className="checkmark"> - Learn/network with mentors</span>
          </label>
        </div>

        <div className={styles.imageContainer}>
          <img
            className={styles.imageContainerProfile}
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <input type="text" placeholder="what would you like to share?" />
        </div>

        <h2 id={styles.centerHeader}>Recent updates</h2>
        <div className={styles.center}>
          <h2>Connect and grow</h2>
          <p>
            To get started, find a mentor that suits your needs and send a
            connection request. Your activity will appear here.
          </p>
          <button>Discover mentors</button>
        </div>
      </div>

      <div className={styles.right}>
        <h4>Mentors for you</h4>
        <p>
          Need help? Our wizard helps you find the right mentor just for you.
        </p>
        <button>
          <svg
            className={styles.svgIcon}
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.211 7.50647C8.10834 8.19093 7.78883 8.82441 7.29943 9.31381C6.81003 9.80321 6.17655 10.1227 5.49209 10.2254H5.42697C5.31804 10.2246 5.2134 10.1828 5.1338 10.1085C5.0542 10.0341 5.00547 9.93253 4.99727 9.82391C4.98908 9.71529 5.02201 9.60755 5.08954 9.52208C5.15708 9.43661 5.25427 9.37964 5.36185 9.36249C5.86079 9.28138 6.32158 9.04541 6.67902 8.68797C7.03646 8.33053 7.27243 7.86974 7.35354 7.3708C7.35955 7.31232 7.37736 7.25567 7.40591 7.20429C7.43446 7.1529 7.47315 7.10785 7.51963 7.07186C7.56611 7.03587 7.61941 7.00969 7.67631 6.99492C7.73321 6.98014 7.79251 6.97708 7.85063 6.98591C7.90875 6.99473 7.96447 7.01527 8.01441 7.04628C8.06435 7.07728 8.10748 7.1181 8.14118 7.16627C8.17487 7.21444 8.19844 7.26895 8.21044 7.32649C8.22244 7.38404 8.22263 7.44342 8.211 7.50104V7.50647ZM9.98562 7.00719C9.98562 8.33136 9.4596 9.60131 8.52326 10.5376C7.58693 11.474 6.31699 12 4.99281 12C3.66864 12 2.39869 11.474 1.46236 10.5376C0.526027 9.60131 0 8.33136 0 7.00719C0 5.75356 0.53727 4.30999 1.59553 2.71446C1.62727 2.66702 1.66805 2.6263 1.71554 2.59464C1.76304 2.56298 1.81631 2.54099 1.8723 2.52994C1.98518 2.50824 2.10207 2.53162 2.19792 2.59506L3.94541 3.76186L5.62234 0.245186C5.65232 0.182386 5.69714 0.12783 5.75293 0.086227C5.80871 0.0446243 5.87379 0.0172264 5.94253 0.00639934C6.01078 -0.00545085 6.08088 -0.000796364 6.14697 0.019974C6.21306 0.0407444 6.27322 0.0770275 6.32242 0.125793C7.12018 0.923557 8.03734 1.89498 8.74285 3.02379C9.5786 4.3534 9.98562 5.65587 9.98562 7.00719ZM9.11731 7.00719C9.11731 4.6953 7.73886 2.83928 6.1379 1.17862L4.51524 4.58676C4.48923 4.6437 4.45092 4.69417 4.40306 4.73452C4.3552 4.77487 4.29898 4.80411 4.23846 4.82012C4.1791 4.83591 4.11712 4.83924 4.05641 4.8299C3.9957 4.82056 3.93758 4.79875 3.88571 4.76585L2.08396 3.56106C1.27534 4.86354 0.868315 6.01948 0.868315 7.00719C0.868315 8.10107 1.30286 9.15015 2.07635 9.92365C2.84985 10.6971 3.89893 11.1317 4.99281 11.1317C6.0867 11.1317 7.13578 10.6971 7.90927 9.92365C8.68276 9.15015 9.11731 8.10107 9.11731 7.00719V7.00719Z"
              fill="black"
            />
          </svg>
          Get match
        </button>
      </div>
    </div>
  );
};

export default Landing;
