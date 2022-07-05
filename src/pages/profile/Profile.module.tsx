import { ProfileUrls } from "enums/GlobalUrls";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import MenteeGoalStep1 from "./menteeGoalStep1/MenteeGoalStep1";
import MenteeGoalStep2 from "./menteeGoalStep2/MenteeGoalStep2";
import MenteeGoalStep3 from "./menteeGoalStep3/MenteeGoalStep3";
import MenteeGoalStep4 from "./menteeGoalStep4/MenteeGoalStep4";
import MenteeGoalStep5 from "./menteeGoalStep5/MenteeGoalStep5";
import styles from "./Profile.module.scss";
import ProfileMain from "./profileMain/ProfileMain";

const ProfileModule = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.profileModule}>
      {/* <div className={styles.sideNav}>
        <SideNavigation />
      </div> */}

      <div className={styles.content}>
        <Routes>
          <Route path={`/${ProfileUrls.base}`} element={<ProfileMain />} />
          <Route path={`/${ProfileUrls.goal1}`} element={<MenteeGoalStep1 />} />
          <Route path={`/${ProfileUrls.goal2}`} element={<MenteeGoalStep2 />} />
          <Route path={`/${ProfileUrls.goal3}`} element={<MenteeGoalStep3 />} />
          <Route path={`/${ProfileUrls.goal4}`} element={<MenteeGoalStep4 />} />
          <Route path={`/${ProfileUrls.goal5}`} element={<MenteeGoalStep5 />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProfileModule;
