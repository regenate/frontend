import {
  EyeOffSVG,
  EyeSVG,
  GoogleIconSvg,
  LinkedinIconSvg,
  LivechatFalseIconSvg,
  PlayIcon,
} from "assets/svg/icons";
import ProgressOverlay from "components/progress-overlay/ProgressOverlay";
import { GlobalUrls } from "enums/GlobalUrls";
import SocialLogin from "modals/socialLogin/SocialLogin";
import { RegisterModel } from "models/register";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "services/auth.service";
import { ReportProgressType } from "utils/types/ReportProgress";
import styles from "./Register.module.scss";

const Register = (props: any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reportProgress, setReportProgress] =
    useState<ReportProgressType>("none");

  const [inputType, setInputType] = useState(false);

  const inputRef = useRef(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const inputData: RegisterModel = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    await AuthService.registerDispatch(
      inputData,
      dispatch,
      navigate,
      setReportProgress,
      t
    );
  };

  const handleInputType = () => {
    setInputType(!inputType);
  };

  return (
    <div className={styles.login}>
      {reportProgress === "inProgress" && <ProgressOverlay />}
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.title}>{t("register.title")}</div>
          </div>
          <div className={styles.socialLogin}>
            <div
              className={styles.google}
              onClick={() => inputRef.current.handleOpen()}
            >
              <SocialLogin ref={inputRef} />
              <GoogleIconSvg />
              <span>{t("register.continue_google")}</span>
            </div>
            <div
              className={styles.linkedin}
              onClick={() => inputRef.current.handleOpen()}
            >
              <SocialLogin ref={inputRef} />
              <LinkedinIconSvg />
              <span>{t("register.continue_linkedin")}</span>
            </div>
          </div>
          <div className={styles.divider}>
            <hr />
            <span className={styles.text}>{t("general.or")}</span>
            <hr />
          </div>
          <div className={styles.nativeLogin}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
              {/* <div>
                <label htmlFor="email" className={styles.nameLabel}>
                  {t("register.name")}
                </label>
                <input
                  className={styles.name}
                  type="text"
                  name="name"
                  placeholder="First and last name"
                  id="name"
                  autoComplete="name"
                  value={name}
                  onChange={handleName}
                />

              </div> */}
              <div>
                <label htmlFor="email" className={styles.emailLabel}>
                  {t("register.email_address")}
                </label>
                <input
                  className={styles.email}
                  type="email"
                  name="email"
                  placeholder={t("register.email_placeholder")}
                  id="email"
                />

                {/* {!email && submit && <p>Enter a valid email address</p>} */}
              </div>
              <div className={styles.passwordContainer}>
                <label htmlFor="password" className={styles.passwordLabel}>
                  {t("register.create_password")}
                </label>
                <input
                  className={styles.password}
                  type={!inputType ? "password" : "text"}
                  name="password"
                  placeholder={t("register.password_placeholder")}
                  id="password"
                />
                <div className={styles.eye} onClick={handleInputType}>
                  {inputType ? <EyeSVG /> : <EyeOffSVG />}
                </div>
              </div>

              {/* {password.length <= 8 && submit && (
            <p>Password cannot be less than 8 characters</p>
          )} */}
              <input type="submit" value="Create my account" />
            </form>
          </div>
          <div className={styles.bottomText}>
            <span className={styles.text}>{t("register.you_agree")}</span>
            <span className={styles.textBold}>
              <Link to="/privacyPolicy">{t("register.privacy_policy")}</Link>
            </span>
            <span className={styles.text}>,{t("general.and")} and</span>
            <span className={styles.textBold}>
              <Link to="/communityStandards">
                {t("register.community_standards")}
              </Link>
            </span>{" "}
            <span className={styles.text}>{t("register.of_regenate")}</span>
            <div className={styles.login}>
              <span>{t("register.already_account")}</span>
              <Link to={`/${GlobalUrls.login}`}>{t("register.login")}</Link>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.rightText}>
            <div className={styles.title}>
              {t("register.accelerate_career")}
            </div>
            <div className={styles.text}>{t("register.join_members")}</div>
            <div className={styles.regenateVideo}>
              <PlayIcon />
              <span className={styles.text}>{t("register.learn_regnate")}</span>
            </div>
          </div>
          <div className={styles.liveChat}>
            <LivechatFalseIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
