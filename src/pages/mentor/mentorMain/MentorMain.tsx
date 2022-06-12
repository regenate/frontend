import { useTranslation } from "react-i18next";
import styles from "./MentorMain.module.scss";

const MentorMain = () => {
  const { t } = useTranslation();

  return <div className={styles.mentorMain}>mentor html code comes here</div>;
};

export default MentorMain;
