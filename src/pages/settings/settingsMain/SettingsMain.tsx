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

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import styles from "./SettingsMain.module.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.input}>
      <h1 className={styles.pageTitle}>Settings</h1>

      <Box sx={{ width: "100%" }}>
        <div className={styles.tab}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="Mentee Profile"
                className={styles.tabTitle}
                {...a11yProps(0)}
              />
              <Tab
                label="Personal Info"
                className={styles.tabTitle}
                {...a11yProps(1)}
              />
              <Tab
                label="Login & Security"
                className={styles.tabTitle}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
        </div>

        <TabPanel value={value} index={0}>
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
                We partner communities to share mentorship globally. If you are
                reffered by our partners, enter the code. To partner, reach us
                at{" "}
                <span className={styles.partner}>partnership@adplist.org</span>
              </p>
            </div>
            <div className={styles.NABottom}>
              <p>N/A</p>
            </div>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}></TabPanel>
        <TabPanel value={value} index={2}></TabPanel>
      </Box>
    </div>
  );
}
