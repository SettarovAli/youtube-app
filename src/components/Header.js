import React from "react";
// import { Icon } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <YouTubeIcon color="secondary" style={{ fontSize: 70 }} />
      <div style={{ fontWeight: "bold", fontSize: 30 }}>
        Youtube video search 🔎
      </div>
    </div>
  );
};

export default Header;
