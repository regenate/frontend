import { ProfileUrls } from "enums/GlobalUrls";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
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
        </Routes>
      </div>
    </div>
  );
};

export default ProfileModule;
