import { LivechatFalseIconSvg, LivechatTrueIconSvg } from "assets/svg/icons";
import React, { useState } from "react";

const LiveChart = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    console.log(hover);
    setHover(true);
  };
  const handleMouseLeave = () => {
    console.log(hover);
    setHover(false);
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {!hover ? <LivechatFalseIconSvg /> : <LivechatTrueIconSvg />}
    </div>
  );
};

export default LiveChart;
