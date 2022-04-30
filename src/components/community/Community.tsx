import { CommunityIconSvg } from "../../assets/svg/icons";
import styles from "./Community.module.scss";

const Community = (props: any) => {
  return (
    <div className={styles.community}>
      <CommunityIconSvg />
      <div className={styles.title}>A community of mentors and mentees.</div>
      <div className={styles.text}>
        Be part of a community of mentors and mentees globally that supports
        each other to make magical conversations happen; supported 24/7
      </div>
    </div>
  );
};
export default Community;
