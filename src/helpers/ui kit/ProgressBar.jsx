import React from "react";
import "./styles/ProgressBar.css";

export default function ProgressBar({color, progressPercentage}) {
  return <div className="ProgressBar">
    <div className="ProgressBar_inner" style={{ background: color, width: progressPercentage+"%", }}></div>
  </div>;
}
