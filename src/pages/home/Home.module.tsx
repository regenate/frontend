import SideNavigation from "components/sideNavigation/SideNavigation";
import { HomeUrls } from "enums/GlobalUrls";
import React from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import styles from "./Home.module.scss";
import Landing from "./landing/Landing";

const HomeModule = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.homeModule}>
      <div className={styles.sideNav}>
        <SideNavigation />
      </div>

      <div className={styles.content}>
        <Routes>
          <Route path={`/${HomeUrls.base}`} element={<Landing />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomeModule;
