import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import { GoogleIconSvg } from "../../assets/svg/icons";
import { Google, LinkedIn } from "@mui/icons-material";

const Login = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

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
  return (
    <div className={styles.login}>
      <div className={styles.socialLogin}>
        <div
          className={styles.google}
          onClick={() => console.log("google clicked")}
        >
          {/* <GoogleIconSvg width={24} height={24} /> */}
          <Google />
          <span>Log in with Google</span>
        </div>
        <div
          className={styles.linkedin}
          onClick={() => console.log("LikedIn clicked")}
        >
          {/* <GoogleIconSvg width={24} height={24} /> */}
          <LinkedIn />
          <span>Log in with Google</span>
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
            <label>
              <div className={styles.emailLabel}>Email address</div>
              <input
                className={styles.email}
                type="email"
                name="email"
                placeholder="Your email address"
                id="email"
                value={email}
                onChange={handleEmail}
              />
            </label>
            {/* {!email && submit && <p>Enter a valid email address</p>} */}
          </div>

          <label>
            <div className={styles.passwordLabel}>Password</div>
            <input
              className={styles.password}
              type="password"
              name="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={handlePassword}
            />
          </label>
          {/* {password.length <= 8 && submit && (
            <p>Password cannot be less than 8 characters</p>
          )} */}
          <div className={styles.formAction}>
            <span className={styles.rememberMe}>
              <label>
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <span className={styles.rememberMeLabel}>Remember me</span>
              </label>
            </span>
            <span className={styles.forgetPassword}>Forget password</span>
          </div>
          <input type="submit" value="Log in" />
        </form>
      </div>
      <div className={styles.bottomText}>
        <span className={styles.question}>New to Regenate?</span>
        <a href="/">Create an account</a>
      </div>
    </div>
  );
};
export default Login;
