import { useTranslation } from "react-i18next";
import styles from "./SettingsMain.module.scss";

const SettingsMain = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.settingsMain}>settings html code comes here</div>
  );
};

export default SettingsMain;
