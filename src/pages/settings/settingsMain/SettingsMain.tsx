// import { useTranslation } from "react-i18next";
// import styles from "./SettingsMain.module.scss";

// const SettingsMain = () => {
//   const { t } = useTranslation();

//   return (
//     <div className={styles.settingsMain}>
//       <h1>Settings</h1>
//     </div>
//   );
// };

// export default SettingsMain;

import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import { useState } from "react";
import styles from "./SettingsMain.module.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

export default function SettingsMain() {
  const [selectedTab, setSelectedTab] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={styles.input}>
      <h1 className={styles.pageTitle}>Settings</h1>

      <Box sx={{ width: "100%" }}>
        <TabContext value={selectedTab}>
          <div className={styles.tab}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <TabList onChange={handleChange}>
                <Tab
                  label="Mentee Profile"
                  value="1"
                  className={styles.tabTitle}
                />
                <Tab
                  label="Personal Info"
                  value="2"
                  className={styles.tabTitle}
                />
                <Tab
                  label="Login & Security"
                  value="3"
                  className={styles.tabTitle}
                />
              </TabList>
            </Box>
          </div>

          <TabPanel value="1">
            <div>
              <div className={styles.mentee}>
                <h6>Expertise</h6>
                <h6 className={styles.edit}>Edit</h6>
              </div>
              <div className={styles.content}>
                <p>Design, Product Management, Product Research</p>
              </div>
              <div>
                <hr />
              </div>
              <div className={styles.mentee}>
                <h6>Company</h6>
                <h6 className={styles.edit}>Edit</h6>
              </div>
              <div className={styles.content}>
                <p>Freelance</p>
              </div>
              <div>
                <hr />
              </div>
              <div className={styles.mentee}>
                <h6>Role</h6>
                <h6 className={styles.edit}>Edit</h6>
              </div>
              <div className={styles.content}>
                <p>Product designer</p>
              </div>
              <div>
                <hr />
              </div>
              <div className={styles.mentee}>
                <h6>Linkedin Profile</h6>
                <h6 className={styles.edit}>Edit</h6>
              </div>
              <div className={styles.content}>
                <p>N/A</p>
              </div>
              <div>
                <hr />
              </div>
              <div className={styles.mentee}>
                <h6>Twitter</h6>
                <h6 className={styles.edit}>Edit</h6>
              </div>
              <div className={styles.content}>
                <p>N/A</p>
              </div>
              <div>
                <hr />
              </div>
              <div className={styles.mentee}>
                <h6>Portfolio/Website link</h6>
                <h6 className={styles.edit}>Edit</h6>
              </div>
              <div className={styles.content}>
                <p>N/A</p>
              </div>
              <div>
                <hr />
              </div>
              <div className={styles.mentee}>
                <h6>Affiliate partner (if any)</h6>
                <h6 className={styles.update}>Update</h6>
              </div>
              <div className={styles.affiliate}>
                <p>
                  We partner communities to share mentorship globally. If you
                  are reffered by our partners, enter the code. To partner,
                  reach us at{" "}
                  <span className={styles.partner}>
                    partnership@adplist.org
                  </span>
                </p>
              </div>
              <div className={styles.NABottom}>
                <p>N/A</p>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
