import React, { useState } from "react";
import { LivechatIconSvg, StarIconSvg } from "../../../assets/svg/icons";
import Community from "../../../components/community/Community";
import styles from "./Step5.module.scss";
import { Link } from "react-router-dom";

const Step5 = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const title = "3,000+ mentors";
  const text =
    "Get access to about 3,000+ mentors with diverse experience and career role to help you get the next job and advance in your career";

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmit(true);
  };

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleRememberMe = (event: any) => {
    setRememberMe(event.target.checked);
  };
  return (
    <div className={styles.step5}>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.title}>Welcome Back!</div>
            <div className={styles.text}>
              A place to meet mentors in the global community
            </div>
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
                  value={email}
                  onChange={handleEmail}
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
                  value={password}
                  onChange={handlePassword}
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
                      onClick={handleRememberMe}
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
          <Community Icon={StarIconSvg} title={title} text={text} />
          <div className={styles.liveChat}>
            <LivechatIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
