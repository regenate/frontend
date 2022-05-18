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
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "services/auth.service";
import { ReportProgressType } from "utils/types/ReportProgress";
import styles from "./Login.module.scss";

const Login = (props: any) => {
  const [reportProgress, setReportProgress] =
    useState<ReportProgressType>("none");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const title = "A community of mentors and mentees.";
  const text =
    "Be part of a community of mentors and mentees globally that supports each other to make magical conversations happen; supported 24/7";

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
      setReportProgress
    );
  };

  return (
    <div className={styles.login}>
      {reportProgress === "inProgress" && <ProgressOverlay />}

      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.title}>Welcome Back!</div>
            <div className={styles.text}>
              A place to meet mentors in the global community
            </div>
          </div>
          <div className={styles.socialLogin}>
            <div
              className={styles.google}
              onClick={() => console.log("google clicked")}
            >
              <GoogleIconSvg />
              <span>Log in with Google</span>
            </div>
            <div
              className={styles.linkedin}
              onClick={() => console.log("LikedIn clicked")}
            >
              <LinkedinIconSvg />
              <span>Log in with LinkedIn</span>
            </div>
          </div>
          <div className={styles.divider}>
            <hr />
            <span className={styles.text}>OR</span>
            <hr />
          </div>
          <div className={styles.nativeLogin}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className={styles.emailLabel}>
                  Email address
                </label>
                <input
                  className={styles.email}
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  id="email"
                  autoComplete="email"
                />

                {/* {!email && submit && <p>Enter a valid email address</p>} */}
              </div>
              <div>
                <label htmlFor="password" className={styles.passwordLabel}>
                  Password
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
                    <span className={styles.rememberMeLabel}>Remember me</span>
                  </label>
                </span>
                <a className={styles.forgetPassword} href="/">
                  Forget password
                </a>
              </div>
              <input type="submit" value="Log in" />
            </form>
          </div>
          <div className={styles.bottomText}>
            <span className={styles.question}>New to Regenate?</span>
            <Link to="/register">Create an account</Link>
          </div>
        </div>

        <div className={styles.right}>
          <Community Icon={CommunityIconSvg} title={title} text={text} />
          <div className={styles.liveChat}>
            <LivechatFalseIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
