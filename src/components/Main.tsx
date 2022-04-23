import Login from "./login/Login";
import Logout from "./logout/Logout";
import Home from "../pages/home/Home";
import Header from "../components/header/Header";
import styles from "./Main.module.scss";
import { LivechatIconSvg, CommunityIconSvg } from "../assets/svg/icons";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.welcome}>
            <div className={styles.title}>Welcome Back!</div>
            <div className={styles.text}>
              A place to meet mentors in the global community
            </div>
          </div>
          <Login />
        </div>
        <div className={styles.right}>
          <div className={styles.community}>
            <CommunityIconSvg />
            <div className={styles.title}>
              A community of mentors and mentees.
            </div>
            <div className={styles.text}>
              Be part of a community of mentors and mentees globally that
              supports each other to make magical conversations happen;
              supported 24/7
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
export default Main;
