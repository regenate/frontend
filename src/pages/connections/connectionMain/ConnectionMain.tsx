import { useTranslation } from "react-i18next";
import styles from "./ConnectionMain.module.scss";

const ConnectionMain = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.connectionMain}>connection html code comes here</div>
  );
};

export default ConnectionMain;
