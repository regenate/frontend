import { CommunityIconSvg } from "../../assets/svg/icons";
import styles from "./Community.module.scss";

const Community = ({
  Icon,
  title,
  text,
}: {
  Icon: any;
  title: string;
  text: string;
}) => {
  return (
    <div className={styles.community}>
      {/* <CommunityIconSvg /> */}
      <Icon />
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
export default Community;
