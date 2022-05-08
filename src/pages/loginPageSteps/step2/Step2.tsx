import {
  BriefcaseIconSvg,
  ChevronLeftIconSvg,
  LivechatIconSvg,
} from "assets/svg/icons";
import Community from "components/community/Community";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Step2.module.scss";

const Step2 = (props: any) => {
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
    <div className={styles.step2}>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.step}>STEP 2 of 5</div>
            <div className={styles.text}>Great! What's your superpower?</div>
          </div>

          <div className={styles.form}>
            <form className={styles.step1Form} onSubmit={handleSubmit}>
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
                  <option value="" selected disabled>
                    Eg. USA, India, etc
                  </option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Product Management">Product Management</option>
                  <option value="Product Research">Product Research</option>
                  <option value="Software Development">
                    Software Development
                  </option>
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
                  <option value="" selected disabled>
                    Select level
                  </option>
                  <option value="Beginner">Beginner</option>
                  <option value="Junior">Junior</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Professional">Professional</option>
                </select>
              </div>

              {/* {password.length <= 8 && submit && (
        <p>Password cannot be less than 8 characters</p>
      )} */}
              <div className={styles.buttons}>
                <Link to="/step1">
                  <ChevronLeftIconSvg />
                  <input
                    type="button"
                    className={styles.backButton}
                    value="Back"
                  />
                </Link>
                <Link to="/step3">
                  <input type="submit" value="Continue" />
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.right}>
          <Community Icon={BriefcaseIconSvg} title={title} text={text} />
          <div className={styles.liveChat}>
            <LivechatIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
