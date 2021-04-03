import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function ProgressBar({ color, percent }) {
  return (
    <div style={{ width: "80px", marginTop: "10px" }}>
      <CircularProgressbar
        strokeWidth={5}
        value={percent}
        text={`${percent}%`}
        styles={buildStyles({
          pathColor: `${color}`,
          textSize: "16px",
        })}
      />
    </div>
  );
}

export default ProgressBar;
