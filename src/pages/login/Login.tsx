import {
  CommunityIconSvg,
  GoogleIconSvg,
  LinkedinIconSvg,
  LivechatFalseIconSvg,
} from "assets/svg/icons";
import Community from "components/community/Community";
import ProgressOverlay from "components/progress-overlay/ProgressOverlay";
import { LoginModel } from "models/login";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "services/auth.service";
import { ReportProgressType } from "utils/types/ReportProgress";
import styles from "./Login.module.scss";

const Login = (props: any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reportProgress, setReportProgress] =
    useState<ReportProgressType>("none");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const inputData: LoginModel = {
      username: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    await AuthService.loginDispatch(
      inputData,
      dispatch,
      navigate,
      setReportProgress,
      t
    );
  };

  return (
    <div className={styles.login}>
      {reportProgress === "inProgress" && <ProgressOverlay />}

      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.title}>{t("login.title")}</div>
            <div className={styles.text}>{t("login.sub_title")}</div>
          </div>
          <div className={styles.socialLogin}>
            <div
              className={styles.google}
              onClick={() => console.log("google clicked")}
            >
              <GoogleIconSvg />
              <span>{t("login.google_login")}</span>
            </div>
            <div
              className={styles.linkedin}
              onClick={() => console.log("LikedIn clicked")}
            >
              <LinkedinIconSvg />
              <span>{t("login.linkedin_login")}</span>
            </div>
          </div>
          <div className={styles.divider}>
            <hr />
            <span className={styles.text}>{t("general.or")}</span>
            <hr />
          </div>
          <div className={styles.nativeLogin}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className={styles.emailLabel}>
                  {t("login.email_address")}
                </label>
                <input
                  className={styles.email}
                  type="email"
                  name="email"
                  placeholder={t("login.email_placeholder")}
                  id="email"
                  autoComplete="email"
                />

                {/* {!email && submit && <p>Enter a valid email address</p>} */}
              </div>
              <div>
                <label htmlFor="password" className={styles.passwordLabel}>
                  {t("login.password")}
                </label>
                <input
                  className={styles.password}
                  type="password"
                  name="password"
                  placeholder="password"
                  id="password"
                  autoComplete="password"
                />
              </div>

              {/* {password.length <= 8 && submit && (
            <p>Password cannot be less than 8 characters</p>
          )} */}
              <div className={styles.formAction}>
                <span className={styles.rememberMe}>
                  <label>
                    <input
                      type="checkbox"
                      name="rememberMe"
                      id="rememberMe"
                      autoComplete="rememberMe"
                    />
                    <span className={styles.rememberMeLabel}>
                      {t("login.remember_me")}
                    </span>
                  </label>
                </span>
                <a className={styles.forgetPassword} href="/">
                  {t("login.forgot_password")}
                </a>
              </div>
              <input type="submit" value="Log in" />
            </form>
          </div>
          <div className={styles.bottomText}>
            <span className={styles.question}>
              {" "}
              {t("login.new_to_regenate")}
            </span>
            <Link to="/register">{t("login.create_account")}</Link>
          </div>
        </div>

        <div className={styles.right}>
          <Community
            Icon={CommunityIconSvg}
            title={t("login.community_title")}
            text={t("login.community_body")}
          />
          <div className={styles.liveChat}>
            <LivechatFalseIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
