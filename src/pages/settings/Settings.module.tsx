import SideNavigation from "components/sideNavigation/SideNavigation";
import { SettingsUrls } from "enums/GlobalUrls";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import styles from "./Settings.module.scss";
import SettingsMain from "./settingsMain/SettingsMain";

const SettingsModule = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.settingsModule}>
      <div className={styles.sideNav}>
        <SideNavigation />
      </div>

      <div className={styles.content}>
        <Routes>
          <Route path={`/${SettingsUrls.base}`} element={<SettingsMain />} />
        </Routes>
      </div>
    </div>
  );
};

export default SettingsModule;
