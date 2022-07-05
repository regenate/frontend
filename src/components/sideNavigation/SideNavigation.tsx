import Avatar from "@mui/material/Avatar";
import {
  SideMenuBookingIcon,
  SideMenuChatIcon,
  SideMenuConnectionIcon,
  SideMenuHomeIcon,
} from "assets/svg/icons";
import { GlobalUrls } from "enums/GlobalUrls";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "redux/store";
import styles from "./SideNavigation.module.scss";

const SideNavigation = () => {
  const { t } = useTranslation();
  const avatarUrl = useSelector((state: RootState) => state.userReducer.avatar);
  return (
    <div className={styles.sideNavigation}>
      <Avatar
        sx={{ width: 60, height: 60, bgcolor: "#077F7F" }}
        alt="Profile"
        src={avatarUrl ? avatarUrl : ""}
        variant="circular"
      />
      <Link className={styles.item} to={`/${GlobalUrls.home}`}>
        <SideMenuHomeIcon />
        <span>{t("side_navigation.home")}</span>
      </Link>
      <Link className={styles.item} to={`/${GlobalUrls.booking}`}>
        <SideMenuBookingIcon />
        <span>{t("side_navigation.bookings")}</span>
      </Link>
      <Link className={styles.item} to={`/${GlobalUrls.home}`}>
        <SideMenuChatIcon />
        <span>{t("side_navigation.chats")}</span>
      </Link>
      <Link className={styles.item} to={`/${GlobalUrls.connection}`}>
        <SideMenuConnectionIcon />
        <span>{t("side_navigation.connections")}</span>
      </Link>

      <Link className={styles.item} to={`/${GlobalUrls.settings}`}>
        <SideMenuConnectionIcon />
        <span>{t("side_navigation.settings")}</span>
      </Link>
    </div>
  );
};
export default SideNavigation;
