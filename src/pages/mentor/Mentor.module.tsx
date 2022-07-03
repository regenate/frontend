import { MentorUrls } from "enums/GlobalUrls";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import styles from "./Mentor.module.scss";
import MentorMain from "./mentorMain/MentorMain";
import MentorProfile from "./mentorProfile/MentorProfile";

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
          <Route path={`/${MentorUrls.profile}`} element={<MentorProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default MentorModule;
