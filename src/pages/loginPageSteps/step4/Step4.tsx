import { AddPhoto } from "assets/image/images";
import { CameraIconSvg, ChevronLeftIconSvg } from "assets/svg/icons";
import Community from "components/community/Community";
import LiveChat from "components/liveChat/LiveChat";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Step4.module.scss";

const Step4 = (props: any) => {
  const [submit, setSubmit] = useState(false);

  const title = "Put a face to your name";
  const text =
    "This will help make it easy for mentors and other mentees to get personal with you and make the knowing process fun and alive";

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmit(true);
  };

  return (
    <div className={styles.step4}>
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
            <form className={styles.step4Form} onSubmit={handleSubmit}>
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
                <Link to="/step3">
                  <ChevronLeftIconSvg />
                  <input
                    type="button"
                    className={styles.backButton}
                    value="Back"
                  />
                </Link>
                <Link to="/step5">
                  <input type="submit" value="Continue" />
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.right}>
          <Community Icon={CameraIconSvg} title={title} text={text} />
          <div className={styles.liveChat}>
            <LiveChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
