import React from "react";
import "./styles/Main.css";
import MainHeader from "./MainHeader";
import UserCallsInfo from "./UserCallsInfo";
import { CallsLayout } from "./CallsLayout";

export default function Main() {
  return <div className="Main">
    <MainHeader />
    <div className="Main_container">
      <UserCallsInfo />
      <CallsLayout />
    </div>
  </div>;
}
