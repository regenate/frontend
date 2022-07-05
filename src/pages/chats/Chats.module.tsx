import SideNavigation from "components/sideNavigation/SideNavigation";
import { ChatsUrls } from "enums/GlobalUrls";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import styles from "./Chats.module.scss";
import ChatsMain from "./chatsMain/ChatsMain";

const SettingsModule = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.chatsModule}>
      <div className={styles.sideNav}>
        <SideNavigation />
      </div>

      <div className={styles.content}>
        <Routes>
          <Route path={`/${ChatsUrls.base}`} element={<ChatsMain />} />
        </Routes>
      </div>
    </div>
  );
};

export default SettingsModule;
