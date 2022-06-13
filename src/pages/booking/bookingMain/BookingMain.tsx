import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./BookingMain.module.scss";

const BookingMain = () => {
  const { t } = useTranslation();

  let url = "";
  const [selectedTab, setSelectedTab] = React.useState("1");
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={styles.bookingMain}>
      <div className={styles.bookingModuleHeader}>
        <h1>Bookings</h1>
        <h5>
          The Session timings are following your local time zone Europe/Berlin{" "}
          <a href={url}>Update</a>
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
              You have no upcoming bookings - start sharing a conversation with
              a mentor
            </TabPanel>
            <TabPanel value="2">
              You have no pending bookings - start sharing a conversation with a
              mentor
            </TabPanel>
            <TabPanel value="3">
              You have no past bookings - start sharing a conversation with a
              mentor
            </TabPanel>
          </TabContext>
        </Box>

        <button className={styles.bookingModuleBtn}>Explore mentors</button>
      </div>
    </div>
  );
};
export default BookingMain;
