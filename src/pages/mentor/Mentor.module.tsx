import { MentorUrls } from "enums/GlobalUrls";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import styles from "./Mentor.module.scss";
import MentorMain from "./mentorMain/MentorMain";

const MentorModule = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.mentorModule}>
      {/* <div className={styles.sideNav}>
        <SideNavigation />
      </div> */}

      <div className={styles.content}>
        <Routes>
          <Route path={`/${MentorUrls.base}`} element={<MentorMain />} />
        </Routes>
      </div>
    </div>
  );
};

export default MentorModule;
