import React from "react";
import "./styles/Main.css";
import MainHeader from "./MainHeader";
import UserCallsInfo from "./UserCallsInfo";

export default function Main() {
  return <div className="Main">
    <MainHeader />
    <div className="Main_container">
      <UserCallsInfo />
    </div>
  </div>;
}
