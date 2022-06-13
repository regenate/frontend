import beAMentor from "assets/image/beAMentor.svg";
import communutyUser from "assets/image/communityUser.svg";
import { CommunityIconSvg, LivechatFalseIconSvg } from "assets/svg/icons";
import Community from "components/community/Community";
import ProgressOverlay from "components/progress-overlay/ProgressOverlay";
import { RoleEnum } from "enums/role";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { OnboardingService } from "services/onboarding.service";
import { ReportProgressType } from "utils/types/ReportProgress";
import styles from "./Role.module.scss";

const Role = (props: any) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reportProgress, setReportProgress] =
    useState<ReportProgressType>("none");

  const handleSubmitRole = async (roleType: RoleEnum) => {
    await OnboardingService.chooseRoleDispatch(
      roleType,
      dispatch,
      navigate,
      setReportProgress,
      t
    );
  };

  return (
    <div className={styles.home}>
      {reportProgress === "inProgress" && <ProgressOverlay />}
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.upperText}>{t("role.part_of_community")}</div>
          <div className={styles.userOptions}>
            <div
              className={styles.communityUser}
              onClick={() => handleSubmitRole(RoleEnum.mentee)}
            >
              <img src={communutyUser} alt="community users" />
              <p className={styles.title}>{t("role.mentee_title")}</p>
              <div className={styles.communityText}>
                {t("role.mentee_text")}
              </div>
              <div className={styles.shadow}></div>
            </div>
            <div
              className={styles.beAmentor}
              onClick={() => handleSubmitRole(RoleEnum.mentor)}
            >
              <img src={beAMentor} alt="be a mentor" />
              <p className={styles.title}>{t("role.mentor_title")}</p>
              <p className={styles.mentorText}>{t("role.mentor_text")}</p>
              <div className={styles.shadow}></div>
            </div>
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
