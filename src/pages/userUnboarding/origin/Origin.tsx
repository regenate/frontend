import {
  ChevronLeftIconSvg,
  LivechatFalseIconSvg,
  StarIconSvg,
} from "assets/svg/icons";
import Community from "components/community/Community";
import Countries from "components/formComponents/Countries";
import Languages from "components/formComponents/Languages";
import { GlobalUrls } from "enums/GlobalUrls";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Origin.module.scss";

const Step1 = (props: any) => {
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [submit, setSubmit] = useState(false);

  const title = "3,000+ mentors";
  const text =
    "Get access to about 3,000+ mentors with diverse experience and career role to help you get the next job and advance in your career";
  let name = "Martins";

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmit(true);
  };

  const handleCountry = (event: any) => {
    setCountry(event.target.value);
  };

  const handleLanguage = (event: any) => {
    setLanguage(event.target.value);
  };

  return (
    <div className={styles.step1}>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.step}>STEP 1 of 5</div>
            <div className={styles.text}>
              Hi, {name}! What's your origin story?
            </div>
          </div>

          <div className={styles.form}>
            <form className={styles.step1Form} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="country" className={styles.countryLabel}>
                  Which country do you live in?
                </label>
                <select
                  id="country"
                  name="country"
                  className={styles.country}
                  value={country}
                  onChange={handleCountry}
                >
                  <Countries />
                </select>

                {/* {!email && submit && <p>Enter a valid email address</p>} */}
              </div>
              <div>
                <label htmlFor="language" className={styles.languageLabel}>
                  What language(s) do you speak?
                </label>
                <select
                  name="language"
                  id="language"
                  onChange={handleLanguage}
                  value={language}
                  className={styles.language}
                >
                  <Languages />
                </select>
              </div>

              {/* {password.length <= 8 && submit && (
        <p>Password cannot be less than 8 characters</p>
      )} */}
              <div className={styles.buttons}>
                <Link to="/">
                  <ChevronLeftIconSvg />
                  <input
                    type="button"
                    className={styles.backButton}
                    value="Back"
                  />
                </Link>
                <Link to={`/${GlobalUrls.expertise}`}>
                  <input type="submit" value="Continue" />
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.right}>
          <Community Icon={StarIconSvg} title={title} text={text} />
          <div className={styles.liveChat}>
            <LivechatFalseIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
