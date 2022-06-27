import SideNavigation from "components/sideNavigation/SideNavigation";
import { HomeUrls } from "enums/GlobalUrls";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { HomeService } from "services/home.service";
import { ReportProgressType } from "utils/types/ReportProgress";
import styles from "./Home.module.scss";
import Landing from "./landing/Landing";

const HomeModule = () => {
  const { t } = useTranslation();
  const [reportProgress, setReportProgress] =
    useState<ReportProgressType>("none");

  const dispatch = useDispatch();

  React.useEffect(() => {
    HomeService.getHomeDispatch(dispatch, setReportProgress);
  }, []);

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
