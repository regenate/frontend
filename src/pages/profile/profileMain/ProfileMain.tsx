import { useTranslation } from "react-i18next";
import styles from "./ProfileMain.module.scss";

const ProfileMain = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.settingsMain}>profile html code comes here</div>
  );
};

export default ProfileMain;
