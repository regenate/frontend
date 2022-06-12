import SideNavigation from "components/sideNavigation/SideNavigation";
import { ConnectionUrls } from "enums/GlobalUrls";
import React from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import styles from "./Connection.module.scss";
import ConnectionMain from "./connectionMain/ConnectionMain";

const ConnectionModule = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.connectionModule}>
      <div className={styles.sideNav}>
        <SideNavigation />
      </div>

      <div className={styles.content}>
        <Routes>
          <Route
            path={`/${ConnectionUrls.base}`}
            element={<ConnectionMain />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default ConnectionModule;
