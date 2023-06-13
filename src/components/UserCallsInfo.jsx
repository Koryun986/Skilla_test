import React, { useState } from "react";
import "./styles/UserCallsInfo.css";
import blueAddBtn from "./../resorces/Header/add_btn_blue.png";
import iconLeftArrow from "./../resorces/Header/arrow_left.png";
import iconRightArrow from "./../resorces/Header/arrow_right.png";
import iconCalendar from "./../resorces/Header/icon-calendar.png";
import callsList from "../store/callsList";
import { observer } from "mobx-react-lite";


export default function UserCallsInfo() {
  return (
    <div className="UserCallsInfo">
      <UserAccountInfo />
    </div>
  );
}
const UserAccountInfo = observer(() => {
  const [ balance, setBalance ] = useState(272);
  
  return (
    <div className="UserAccountInfo">
      <div className="UserAccount_Balance">
        <span>Баланс: </span> {balance} &#8381;
        <img src={blueAddBtn} alt="add" />
      </div>  
      <div className="UserAccount_calls_start_day">
        <img src={iconLeftArrow} 
        onClick={ () => callsList.decrementCallsStartDay() }
        />
        <span>
          <img src={iconCalendar} alt="" />
          <span> {callsList.callsStartDate} дня </span>
        </span>
        <img src={iconRightArrow} 
        onClick={ () => callsList.incrementCallsStartDay() }
        />
      </div>
    </div>
  );
})
