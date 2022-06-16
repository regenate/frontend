import {
  faArrowDownShortWide,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Search } from "@mui/icons-material";
import SideNavigation from "components/sideNavigation/SideNavigation";
import { ConnectionUrls } from "enums/GlobalUrls";
import { default as React, useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import styles from "./Connection.module.scss";
import ConnectionMain from "./connectionMain/ConnectionMain";

const ConnectionModule = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  // const handleClick = () => {
  //   alert("I love Ifeoluwa mi ");
  // };

  return (
    <div className={styles.connectionModule}>
      <div className={styles.sideNav}>
        <SideNavigation />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.text}>
          <h3 className={styles.titleText}>My Connections</h3>
          <p className={styles.paraText}>
            Community members you've met and connected with will appear <br />
            here. Click the profile to view your journey with a membber.
          </p>
          <h6 style={{ color: "green" }}>Mentors</h6>
          <hr />
        </div>
        <div className={styles.searchField}>
          <div className={styles.searchInput}>
            <Search
              style={{
                margin: "5px",
                color: "green",
                fontSize: 20,
                border: "none",
              }}
            />
            <input
              style={{ border: "none", width: "500px" }}
              placeholder="Search for member"
            />
          </div>
          <div className={styles.sortBy}>
            <FontAwesomeIcon
              style={{ color: "black" }}
              icon={faArrowDownShortWide}
            />
            <button
              onClick={() => setShow(true)}
              style={{
                border: "none",
                width: "75px",
                backgroundColor: "lightgray",
              }}
            >
              sort by
            </button>
            {show ? (
              <div>
                <select>
                  <option>show all</option>
                  <option>recently met</option>
                  <option>mostly met</option>
                  <option>haven't met for a while</option>
                </select>
              </div>
            ) : null}
          </div>

          <div style={{ marginLeft: "30px" }} className={styles.filter}>
            <FontAwesomeIcon style={{ color: "black" }} icon={faFilter} />
            <button
              style={{
                border: "none",
                width: "75px",
                backgroundColor: "lightgray",
              }}
            >
              Filter
            </button>
          </div>
        </div>
        <div className={styles.mentor1}>
          <div className={styles.mentor}>
            <h6>Add mentors</h6>
            <p className={styles.paraText}>
              Learn and grow with over
              <br />
              2000+ mentors today
            </p>
            <button className={styles.butt}>Discover Mentors</button>
          </div>
          <div className={styles.img}>img</div>
        </div>
      </div>
      <div className={styles.content}>
        <Routes>
          <Route
            path={`/${ConnectionUrls.base}`}
            element={<ConnectionMain />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default ConnectionModule;
