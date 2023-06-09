import React from "react";
import "./styles/SideBarPrimaryBtn.css";

export default function SideBarPrimaryBtn({title, icon}) {
  return <div className="SideBar_Primary_Btn">
        {<><span>{title}</span><img src={icon} /></> }
  </div>;
}
