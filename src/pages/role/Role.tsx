import beAMentor from "assets/image/beAMentor.svg";
import communutyUser from "assets/image/communityUser.svg";
import { CommunityIconSvg, LivechatFalseIconSvg } from "assets/svg/icons";
import Community from "components/community/Community";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Role.module.scss";

const Role = (props: any) => {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.upperText}>{t("role.part_of_community")}</div>
          <div className={styles.userOptions}>
            <Link to="/step1">
              <div className={styles.communityUser}>
                <img src={communutyUser} alt="community users" />
                <p className={styles.title}>{t("role.mentee_title")}</p>
                <div className={styles.communityText}>
                  {t("role.mentee_text")}
                </div>
                <div className={styles.shadow}></div>
              </div>
            </Link>
            <Link to="/">
              <div className={styles.beAmentor}>
                <img src={beAMentor} alt="be a mentor" />
                <p className={styles.title}>{t("role.mentor_title")}</p>
                <p className={styles.mentorText}>{t("role.mentor_text")}</p>
                <div className={styles.shadow}></div>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.right}>
          <Community
            Icon={CommunityIconSvg}
            title={t("community.title")}
            text={t("community.body")}
          />
          <div className={styles.liveChat}>
            <LivechatFalseIconSvg />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Role;
