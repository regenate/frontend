import {
  ChevronLeftIconSvg,
  LivechatFalseIconSvg,
  StarIconSvg,
} from "assets/svg/icons";
import Community from "components/community/Community";
import { GlobalUrls } from "enums/GlobalUrls";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Bio.module.scss";

const Bio = (props: any) => {
  const [userStory, setUserStory] = useState("");
  const [userBio, setUserBio] = useState("");
  const [submit, setSubmit] = useState(false);

  const title = "More about your expertise";
  const text =
    "This will make it easier for potential mentors and mentees to know about your expertise and experience";
  const userBioText =
    "i am a product designer at Apple who writes about design. I love my doggie (fluffy) and enjoy collecting new NFTs during my free time!";
  const userStoryText =
    "Tell us more about yourself, your goals and what you love!";

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmit(true);
  };

  const handleUserStory = (event: any) => {
    setUserStory(event.target.value);
  };

  const handleUserBio = (event: any) => {
    setUserBio(event.target.value);
  };

  return (
    <div className={styles.bio}>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.step}>STEP 5 of 5</div>
            <div className={styles.text}>
              Almost there! How would you like to be intro'd
            </div>
          </div>

          <div className={styles.form}>
            <form className={styles.bioForm} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="userStory" className={styles.userStoryLabel}>
                  <img
                    className={styles.profilePic}
                    src="/profile-picture.jpg"
                    alt="user avatar"
                  />
                  <span>Everybody has a story, what's yours?</span>
                </label>
                <textarea
                  className={styles.userStory}
                  onChange={handleUserStory}
                  id="userStory"
                  name="userStory"
                  value={userStory}
                  placeholder={userStoryText}
                />

                {/* {!email && submit && <p>Enter a valid email address</p>} */}
              </div>
              <div>
                <label htmlFor="userBio" className={styles.userBioLabel}>
                  Sample Bio
                </label>
                <textarea
                  className={styles.userBio}
                  id="userBio"
                  name="userBio"
                  value={userBio}
                  onChange={handleUserBio}
                  placeholder={userBioText}
                />
              </div>

              {/* {password.length <= 8 && submit && (
        <p>Password cannot be less than 8 characters</p>
      )} */}
              <div className={styles.buttons}>
                <Link to={`/${GlobalUrls.avatar}`}>
                  <ChevronLeftIconSvg />
                  <input
                    type="button"
                    className={styles.backButton}
                    value="Back"
                  />
                </Link>
                <Link to="/">
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

export default Bio;
