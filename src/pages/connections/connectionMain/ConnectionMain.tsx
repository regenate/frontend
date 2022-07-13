import { Search } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import styles from "./ConnectionMain.module.scss";
const ConnectionMain = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.connectionMain}>
      <div className={styles.rightSide}>
        <div className={styles.text}>
          <h3 className={styles.titleText}>{t("connectionmain.title")}</h3>
          <p className={styles.paraText}>
          {t("connectionmain.click")} 
          </p>

          <h6 className={styles.tith6}> {t("connectionmain.mentors")}</h6>
          <hr />
        </div>
        <div className={styles.searchField}>
          <div className={styles.searchInput}>
            <Search
              style={{
                margin: "5px",
                color: "#077F7F",
                fontSize: 24,
                border: "none",
              }}
            />
            <input
              style={{ border: "none", width: "493px", height: "45px" }}
              placeholder="Search for member"
            />
          </div>
          {/* <div className={styles.sortBy}>
            <FontAwesomeIcon
              style={{ color: "black" }}
              icon={faArrowDownShortWide}
            />
            <button
              style={{
                border: "none",
                width: "75px",
                backgroundColor: "lightgray",
              }}
            >
              sort by
            </button>
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
            </div> */}
        </div>
        <div className={styles.mentor1}>
          <div className={styles.mentor}>
            <h6 className={styles.addMentor}> {t("connectionmain.add_mentors")}</h6>
            <p className={styles.paraText1}>
            {t("connectionmain.learn")}
            </p>
            <button className={styles.butt}> {t("connectionmain.discover_mentors")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionMain;
