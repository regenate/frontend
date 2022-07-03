import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import { useState } from "react";
import styles from "./MentorProfile.module.scss";
import image from "./pictures/Ellipse 12.svg";
import globe from "./pictures/Globe.svg";
import linkedIn from "./pictures/LinkedIn.svg";
import paint from "./pictures/Paint.svg";
import cover from "./pictures/Rectangle 51.svg";
import star from "./pictures/Star.svg";
import twitter from "./pictures/twittwer.svg";

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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MentorProfile() {
  const [selectedTab, setSelectedTab] = useState("1");

  const handleChange = (event: any, newValue: any) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={styles.body}>
      <img className={styles.rectangle} src={cover} alt="" />
      <div>
        <div className={styles.profileInfo}>
          <img className={styles.img} src={image} alt="" />
          <div className={styles.about}>
            <h1>
              Sikiratu sindodo <span>us</span>
            </h1>
            <p>Designer at Electronic Arts</p>
          </div>
        </div>
      </div>
      <Box sx={{}}>
        <TabContext value={selectedTab}>
          <div className={styles.tab}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 188888,
              }}
            >
              <TabList onChange={handleChange}>
                <Tab
                  label="Overview"
                  value="1"
                  className={styles.tabTitle}
                  sx={{ textTransform: "capitalize" }}
                />

                <Tab
                  label="Reviews"
                  value="2"
                  className={styles.tabTitle}
                  sx={{ textTransform: "capitalize" }}
                />

                {/* <div className={styles.notification}>
                <p>4</p>
              </div> */}
                <Tab
                  label="Group Sessions"
                  value="3"
                  className={styles.tabTitle}
                  sx={{ textTransform: "capitalize" }}
                />
                {/* <div className={styles.notification}>
                <p>4</p>
              </div> */}
              </TabList>
            </Box>
          </div>

          <TabPanel value="1">
            <div>
              <div className={styles.paragraph}>
                <img className={styles.star} src={star} alt="" />
                <p>
                  I’m a designer at Electronic Arts and the Founder &amp; Design
                  Lead of the Design
                </p>{" "}
                <br />
                <small>Buddies community!</small>{" "}
                <div className={styles.downParagraph}>
                  <img className={styles.paint} src={paint} alt="" />
                  <p>
                    On the side, I have my own art business (and table at anime
                    conventions), and...
                  </p>
                </div>{" "}
                <span className={styles.showMore}>Show more</span>
              </div>
              <div className={styles.socials}>
                <div className={styles.linkedInBox}>
                  <img className={styles.linkedIn} src={linkedIn} alt="" />
                </div>
                <div className={styles.twitterBox}>
                  {" "}
                  <img className={styles.twitter} src={twitter} alt="" />
                </div>
                <div>
                  {" "}
                  <img className={styles.globe} src={globe} alt="" />
                </div>
              </div>
              <div className={styles.level}>
                <div>
                  <p>Expertise</p>
                  <button className={styles.design}>Design</button>
                </div>
                <div>
                  <p>Fluent in</p>
                  <button className={styles.english}>English</button>
                </div>
              </div>
              <h3>Experience</h3>
              <div className={styles.bottomBox}>
                <div className={styles.greenBox}></div>
                <div className={styles.desingElect}>
                  <h4>Designer</h4>
                  <p>Electronic Arts</p>
                </div>
                <button>PRESENT</button>
              </div>

              <div className={styles.right}>
                <div className={styles.topContainer}>
                  <h6>Be the first to know when mentor is back!</h6>
                  <p>
                    This mentor is unavailable right now. Click on Notify and
                    we’ll let you know when they are bookable again!
                  </p>
                  <button>Notify me</button>
                </div>
                <div className={styles.bottomContainer}>
                  <div className={styles.tips}>
                    <span>#1 Tips for Success</span>
                    <p className={styles.brown}>&lt;</p>
                    <p>&gt;</p>
                  </div>
                  <h6>Be the first to know when mentor is back!</h6>
                  <div className={styles.bottomConPara}>
                    <p>
                      Plan an agenda! Plan out the questions and topics you’d
                      like to discuss. If you’d like to work together on
                      long-term goals, set some time to discuss expectations for
                      each other.
                    </p>
                  </div>
                </div>
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
