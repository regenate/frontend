import {
  BriefcaseIconSvg,
  ChevronLeftIconSvg,
  LivechatFalseIconSvg,
} from "assets/svg/icons";
import Community from "components/community/Community";
import Experience from "components/formComponents/Experience";
import ExpertiseData from "components/formComponents/ExpertiseData";
import { GlobalUrls } from "enums/GlobalUrls";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Expertise.module.scss";

const Expertise = (props: any) => {
  const [expertise, setExpertise] = useState("");
  const [experience, setExperience] = useState("");
  const [submit, setSubmit] = useState(false);

  const title = "More about your expertise";
  const text =
    "This will make it easier for potential mentors and mentees to know about your expertise and experience";

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmit(true);
  };

  const handleExpertise = (event: any) => {
    setExpertise(event.target.value);
  };

  const handleExperience = (event: any) => {
    setExperience(event.target.value);
  };

  return (
    <div className={styles.expertise}>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.step}>STEP 2 of 5</div>
            <div className={styles.text}>Great! What's your superpower?</div>
          </div>

          <div className={styles.form}>
            <form className={styles.originForm} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="country" className={styles.expertiseLabel}>
                  What is your expertise?
                </label>
                <select
                  name="country"
                  id="country"
                  onChange={handleExpertise}
                  value={expertise}
                  className={styles.expertise}
                >
                  <ExpertiseData />
                </select>

                {/* {!email && submit && <p>Enter a valid email address</p>} */}
              </div>
              <div>
                <label htmlFor="language" className={styles.experienceLabel}>
                  Level of experience
                </label>
                <select
                  name="country"
                  id="country"
                  onChange={handleExperience}
                  value={experience}
                  className={styles.experience}
                >
                  <Experience />
                </select>
              </div>

              {/* {password.length <= 8 && submit && (
        <p>Password cannot be less than 8 characters</p>
      )} */}
              <div className={styles.buttons}>
                <Link to="/origin">
                  <ChevronLeftIconSvg />
                  <input
                    type="button"
                    className={styles.backButton}
                    value="Back"
                  />
                </Link>
                <Link to={`/${GlobalUrls.background}`}>
                  <input type="submit" value="Continue" />
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.right}>
          <Community Icon={BriefcaseIconSvg} title={title} text={text} />
          <div className={styles.liveChat}>
            <LivechatFalseIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
