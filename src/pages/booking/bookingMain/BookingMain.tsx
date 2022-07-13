import {
  BriefcaseIconSvg,
  ChevronLeftIconSvg,
  LivechatFalseIconSvg,
} from "assets/svg/icons";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Community from "components/community/Community";
import { Box, Tab } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./BookingMain.module.scss";

const BookingMain = () => {
  const { t } = useTranslation();

  let url = "";
  const [selectedTab, setSelectedTab] = React.useState("1");
  const handleChange = (event: any, newValue: any) => {
    console.warn(event);
    console.warn(newValue);
    setSelectedTab(newValue);
  };

  return (
    <div className={styles.bookingMain}>
      <div className={styles.bookingModuleHeader}>
          <Community
            Icon={BriefcaseIconSvg}
            title={t("bookingmain.community.title")}
            text={t("bookingmain.community.body")}
          />
        <h5>
        {t("bookingmain.timing")}{" "}
          <a href={url}>{t("bookingmain.update")}</a>
        </h5>
      </div>

      <div className={styles.bookingModuleTab}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={selectedTab}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                width: "770.98px",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Upcoming" value="1" />
                <Tab label="Pending" value="2" />
                <Tab label="Past" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
            {t("bookingmain.value1")}
            </TabPanel>
            <TabPanel value="2">
            {t("bookingmain.value2")}
            </TabPanel>
            <TabPanel value="3">
            {t("bookingmain.value3")}
            </TabPanel>
          </TabContext>
        </Box>

        <button className={styles.bookingModuleBtn}>{t("bookingmain.explore_mentors")}</button>
      </div>
    </div>
  );
};
export default BookingMain;
