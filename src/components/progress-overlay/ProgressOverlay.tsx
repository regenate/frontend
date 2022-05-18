import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";
import styles from "./ProgressOverlay.module.scss";

const ProgressOverlay = () => {
  return (
    <div className={styles.progressOverlay}>
      <Box sx={{ display: "flex", justifyContent: "center", color: "#0077b5" }}>
        <CircularProgress size={"10%"} />
      </Box>
    </div>
  );
};
export default ProgressOverlay;
