import { LivechatFalseIconSvg, LivechatTrueIconSvg } from "assets/svg/icons";
import React, { useState } from "react";

function LiveChat() {
  const [hover, setHover] = useState<boolean>(false);

  const handleMouseIn = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
      {hover ? <LivechatTrueIconSvg /> : <LivechatFalseIconSvg />}
    </div>
  );
}

export default LiveChat;
