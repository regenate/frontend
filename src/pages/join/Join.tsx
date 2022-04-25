import React, { useEffect, useState } from "react";
import styles from "./Join.module.scss";
import {
  GoogleIconSvg,
  LinkedinIconSvg,
  LivechatIconSvg,
  PlayIcon,
  EyeOffSVG,
  EyeSVG,
} from "../../assets/svg/icons";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";

const Join = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [inputType, setInputType] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(true);
  };

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handleName = (event: any) => {
    setName(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleInputType = () => {
    setInputType(!inputType);
  };

  return (
    <div className={styles.login}>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.title}>Join REGENATE Today</div>
          </div>
          <div className={styles.socialLogin}>
            <div
              className={styles.google}
              onClick={() => console.log("google clicked")}
            >
              <GoogleIconSvg />
              <span>Continue with Google</span>
            </div>
            <div
              className={styles.linkedin}
              onClick={() => console.log("LikedIn clicked")}
            >
              <LinkedinIconSvg />
              <span>Continue with LinkedIn</span>
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
                <label htmlFor="email" className={styles.nameLabel}>
                  Your name
                </label>
                <input
                  className={styles.name}
                  type="text"
                  name="name"
                  placeholder="First and last name"
                  id="name"
                  value={name}
                  onChange={handleName}
                />

                {/* {!email && submit && <p>Enter a valid email address</p>} */}
              </div>
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
                  value={email}
                  onChange={handleEmail}
                />

                {/* {!email && submit && <p>Enter a valid email address</p>} */}
              </div>
              <div className={styles.passwordContainer}>
                <label htmlFor="password" className={styles.passwordLabel}>
                  Create a password
                </label>
                <input
                  className={styles.password}
                  type={!inputType ? "password" : "text"}
                  name="password"
                  placeholder="password"
                  id="password"
                  value={password}
                  onChange={handlePassword}
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
            <span className={styles.text}>By continuing, you agree to the</span>
            <span className={styles.textBold}>
              <Link to="/">Terms of use Privacy policy</Link>
            </span>
            <span className={styles.text}>, and</span>
            <span className={styles.textBold}>
              <Link to="/">Community Standards</Link>
            </span>{" "}
            <span className={styles.text}>of Regenate.com</span>
            <div className={styles.login}>
              <span>Already have an account?</span>
              <Link to="/login">Log in</Link>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.rightText}>
            <div className={styles.title}>Accelerate your career growth</div>
            <div className={styles.text}>
              Join members from over 60+ countries to learn from curated mentors
              in tech
            </div>
            <div className={styles.regenateVideo}>
              <PlayIcon />
              <span className={styles.text}>Learn how Regenate works</span>
            </div>
          </div>
          <div className={styles.liveChat}>
            <LivechatIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Join;
