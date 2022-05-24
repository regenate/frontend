import { AddPhoto } from "assets/image/images";
import {
  CameraIconSvg,
  ChevronLeftIconSvg,
  LivechatFalseIconSvg,
} from "assets/svg/icons";
import Community from "components/community/Community";
import { GlobalUrls } from "enums/GlobalUrls";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Avatar.module.scss";

const Avatar = (props: any) => {
  const [submit, setSubmit] = useState(false);

  const title = "Put a face to your name";
  const text =
    "This will help make it easy for mentors and other mentees to get personal with you and make the knowing process fun and alive";

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmit(true);
  };

  return (
    <div className={styles.avatar}>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.step}>STEP 4 of 5</div>
            <div className={styles.text}>
              Add a profile photo so people can find you
            </div>
            <div className={styles.textSmall}>
              Have a favorite picture? Upload it now
            </div>
          </div>

          <div className={styles.form}>
            <form className={styles.avatarForm} onSubmit={handleSubmit}>
              <div className={styles.imageUpload}>
                <label className={styles.imageLabel} htmlFor="uploadPhoto">
                  <AddPhoto />
                </label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  name="uploadPhoto"
                  id="uploadPhoto"
                  accept="image/*"
                />
              </div>

              <div className={styles.buttons}>
                <Link to={`/${GlobalUrls.background}`}>
                  <ChevronLeftIconSvg />
                  <input
                    type="button"
                    className={styles.backButton}
                    value="Back"
                  />
                </Link>
                <Link to={`/${GlobalUrls.bio}`}>
                  <input type="submit" value="Continue" />
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.right}>
          <Community Icon={CameraIconSvg} title={title} text={text} />
          <div className={styles.liveChat}>
            <LivechatFalseIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
