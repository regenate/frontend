import {
  ChatBubbleOutline,
  Facebook,
  FavoriteBorderTwoTone,
  Instagram,
  LinkedIn,
  MarkUnreadChatAltTwoTone,
  Search,
  Twitter,
  Work,
  YouTube,
} from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RegensLogo } from "../../../assets/svg/icons";
import Footer from "../../../components/footer/Footer";
import Countries from "../../../components/formComponents/Countries";
import Experience from "../../../components/formComponents/Experience";
import ExpertiseData from "../../../components/formComponents/ExpertiseData";
import { mentorsData } from "./data";
import styles from "./MentorMain.module.scss";

const MentorMain = () => {
  const { t } = useTranslation();

  const [selectedTab, setSelectedTab] = useState("1");
  const handleChange = (event: any, newValue: any) => {
    console.warn(event);
    console.warn(newValue);
    setSelectedTab(newValue);
  };

  return (
    <div className={styles.mentorMain}>
      <Box sx={{ width: "100%" }}>
        <TabContext value={selectedTab}>
          <Box>
            <TabList onChange={handleChange}>
              <Tab
                sx={{
                  fontSize: "15px",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#00354F",
                  lineHeight: "30px",
                }}
                label="Mentors"
                value="1"
              />
              <Tab
                sx={{
                  fontSize: "15px",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#00354F",
                  lineHeight: "30px",
                }}
                label="Group Sessions"
                value="2"
              />
              <Tab
                sx={{
                  fontSize: "15px",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#00354F",
                  lineHeight: "30px",
                }}
                label="Topics"
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel value="1"></TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
      </Box>

      {/*mentors top */}

      <div className={styles.dropDownItems}>
        <button className={styles.searchbtn}>
          <Search className="searchIcon" />
          <input
            type={"text"}
            placeholder={"Search by company, role or language"}
          />
        </button>

        <div className={styles.selectedOptions}>
          <select>
            <option>Expertise</option>
            <ExpertiseData />
          </select>

          <select>
            <option>Level</option>
            <Experience />
          </select>

          <select>
            <option>Country</option>
            <Countries />
          </select>
        </div>
      </div>

      {/*mentors information */}
      <div className={styles.container}>
        <div className={styles.itemWrapper}>
          {mentorsData.map((d, index) => (
            <div className={styles.item} key={index}>
              <img src={d.img} alt="" />

              <div className={styles.messagesIconContainer}>
                <MarkUnreadChatAltTwoTone className={styles.messagesIcon} />
                <span>18</span>
                <FavoriteBorderTwoTone className={styles.favoriteIcon} />
              </div>

              <h3>
                {d.name}
                <span>{d.abreviation}</span>
              </h3>
              <h4>{d.work}</h4>

              <div className={styles.workContainer}>
                <Work className={styles.workIcon} />
                <h6>{d.role}</h6>
              </div>

              <div className={styles.interestContainer}>
                <ChatBubbleOutline className={styles.interestIcon} />
                <h6>{d.interest}</h6>
              </div>
            </div>
          ))}
        </div>
        <button type="submit">Load more mentors</button>
      </div>

      {/*mentors page footer */}
      <div className={styles.mentorsFooterWrapper}>
        <div className={styles.left}>
          <RegensLogo className={styles.mentorsFooterLogo} />
          <p>
            To inspire powerful conversations and collaborations among members
            worldwide so together we can change the world with creativity
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.socialIconContainer}>
            <YouTube className={styles.Icon} />
          </div>
          <div className={styles.socialIconContainer}>
            <LinkedIn className={styles.Icon} />
          </div>
          <div className={styles.socialIconContainer}>
            <Twitter className={styles.Icon} />
          </div>
          <div className={styles.socialIconContainer}>
            <Facebook className={styles.Icon} />
          </div>
          <div className={styles.socialIconContainer}>
            <Instagram className={styles.Icon} />
          </div>
        </div>
      </div>

      <hr />
      <div className={styles.mentorsFooterWrapper2}>
        <div className={styles.left2}>
          <p>Find mentors</p>
          <p>Become a mentor</p>
          <p>Community</p>
          <p>Blog</p>
        </div>
        <div className={styles.right2}>
          <p>Join Regenate</p>
          <p>FAQs</p>
          <p>Help Centre</p>
          <p>Partnerships</p>
        </div>
      </div>

      <div className={styles.mentorsFooterWrapper3}>
        <div className={styles.left3}>
          <Footer />
        </div>

        <div className={styles.right3}>
          <p>Contact us</p>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default MentorMain;
