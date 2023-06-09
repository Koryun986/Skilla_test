import React from "react";
import "./styles/SideBar_Row.css";

export default function SideBarRow({isActive, children}) {
  return <div className={isActive ? "SideBar_Row SideBar_Row_active" : "SideBar_Row"}>
    {isActive && <span className="SideBar_Row_active_indicator"></span> }
    {children}
  </div>;
}
