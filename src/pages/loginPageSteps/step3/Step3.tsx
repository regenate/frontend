import { BriefcaseIconSvg, ChevronLeftIconSvg } from "assets/svg/icons";
import Community from "components/community/Community";
import LiveChat from "components/liveChat/LiveChat";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Step3.module.scss";

const Step3 = (props: any) => {
  const [userTitle, setUserTitle] = useState("");
  const [url, setUrl] = useState("");
  const [companySchool, setCompanySchool] = useState("");
  const [submit, setSubmit] = useState(false);

  const title = "More about your expertise";
  const text =
    "This will make it easier for potential mentors and mentees to know about your expertise and experience";

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmit(true);
  };

  const handleUserTitle = (event: any) => {
    setUserTitle(event.target.value);
  };

  const handleUrl = (event: any) => {
    setUrl(event.target.value);
  };

  const handleCompanySchool = (event: any) => {
    setCompanySchool(event.target.value);
  };

  const handleGetLinkedInURL = () => {};

  return (
    <div className={styles.step3}>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.step}>STEP 3 of 5</div>
            <div className={styles.text}>Great! What's your superpower?</div>
          </div>

          <div className={styles.form}>
            <form className={styles.step3Form} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="company" className={styles.companySchoolLabel}>
                  Company/School
                </label>
                <input
                  className={styles.companySchool}
                  type="text"
                  name="company"
                  id="company"
                  placeholder=""
                  autoComplete="company"
                  value={companySchool}
                  onChange={handleCompanySchool}
                />

                {/* {!email && submit && <p>Enter a valid email address</p>} */}
              </div>
              <div>
                <label htmlFor="title" className={styles.userTitleLabel}>
                  Your title
                </label>
                <input
                  className={styles.userTitle}
                  type="text"
                  name="title"
                  placeholder="Mr. Mrs. Miss Dr."
                  id="title"
                  autoComplete="title"
                  value={userTitle}
                  onChange={handleUserTitle}
                />

                {/* {!email && submit && <p>Enter a valid email address</p>} */}
              </div>
              <div>
                <label htmlFor="linkedInUrl" className={styles.urlLabel}>
                  LinkedIn URL (Optional)
                </label>
                <div className={styles.linkedIn}>
                  <span className={styles.linkedInPrefix}>Linkedin.com</span>
                  <input
                    className={styles.url}
                    type="text"
                    name="linkedInUrl"
                    id="linkedInUrl"
                    autoComplete="linkedInUrl"
                    value={url}
                    onChange={handleUrl}
                  />
                </div>
              </div>
              <div onClick={handleGetLinkedInURL} className={styles.getUrl}>
                Get your LinkedIn URL
              </div>

              {/* {password.length <= 8 && submit && (
        <p>Password cannot be less than 8 characters</p>
      )} */}
              <div className={styles.buttons}>
                <Link to="/step2">
                  <ChevronLeftIconSvg />
                  <input
                    type="button"
                    className={styles.backButton}
                    value="Back"
                  />
                </Link>
                <Link to="/step4">
                  <input type="submit" value="Continue" />
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.right}>
          <Community Icon={BriefcaseIconSvg} title={title} text={text} />
          <div className={styles.liveChat}>
            <LiveChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
