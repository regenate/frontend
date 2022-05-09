import beAMentor from "assets/image/beAMentor.svg";
import communutyUser from "assets/image/communityUser.svg";
import { CommunityIconSvg, LivechatFalseIconSvg } from "assets/svg/icons";
import Community from "components/community/Community";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = (props: any) => {
  const title = "A community of mentors and mentees.";
  const text =
    "Be part of a community of mentors and mentees globally that supports each other to make magical conversations happen; supported 24/7";
  return (
    <div className={styles.home}>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.upperText}>
            We're glad you're here! How do you want to be a part of this
            community?
          </div>
          <div className={styles.userOptions}>
            <Link to="/step1">
              <div className={styles.communityUser}>
                <img src={communutyUser} alt="community users" />
                <p className={styles.title}>Community User</p>
                <div className={styles.communityText}>
                  You’ll be able to book mentors, join group sessions and more
                </div>
                <div className={styles.shadow}></div>
              </div>
            </Link>
            <Link to="/">
              <div className={styles.beAmentor}>
                <img src={beAMentor} alt="be a mentor" />
                <p className={styles.title}>Be a mentor</p>
                <p className={styles.mentorText}>
                  Mentor the global community, and meet new mentees
                </p>
                <div className={styles.shadow}></div>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.right}>
          <Community Icon={CommunityIconSvg} title={title} text={text} />
          <div className={styles.liveChat}>
            <LivechatFalseIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
