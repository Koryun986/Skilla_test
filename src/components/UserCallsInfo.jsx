import React, { useState } from "react";
import "./styles/UserCallsInfo.css";
import blueAddBtn from "./../resorces/Header/add_btn_blue.png";
import iconLeftArrow from "./../resorces/Header/arrow_left.png";
import iconRightArrow from "./../resorces/Header/arrow_right.png";
import iconCalendar from "./../resorces/Header/icon-calendar.png";
import iconDownArrow from "./../resorces/Header/arrow_down.png";
import iconSearch from "./../resorces/Header/loop.png";
import callsList from "../store/callsList";
import { observer } from "mobx-react-lite";
import { API_CALL_STATUS_IN_COMING, API_CALL_STATUS_OUT_GOING } from "../helpers/Constants";

export default function UserCallsInfo() {
  return (
    <div className="UserCallsInfo">
      <UserAccountInfo />
      <UserCallsSort />
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

const UserCallsSort = observer(() => {
  const callsOptions = ["Все звонки", API_CALL_STATUS_IN_COMING, API_CALL_STATUS_OUT_GOING];

  const setCallsSort = (index) => {
    switch(callsOptions[index]){
      case(API_CALL_STATUS_IN_COMING):
        callsList.setSortInComingCalls();
        break;
      case(API_CALL_STATUS_OUT_GOING):
        callsList.setSortOutGoingCalls();
        break;
      default:
        callsList.setNotSort();
        break;
    }
  }

  return (
    <div className="UserCallsSort"> 
      <div className="UserCallsSort_search flex_align_center">
        <img src={iconSearch} />
        Поиск по звонкам
      </div>
      <div className="UserCallsSort_categories flex_align_center">
        <SortCategorie options={["Все типы"]} />
        <SortCategorie options={["Все сотрудники"]} />
        <SortCategorie options={ callsOptions } sortFunction={setCallsSort}/>
        <SortCategorie options={["Все источники "]} />
        <SortCategorie options={["Все оценки"]} />
        <SortCategorie options={["Все ошибки"]} />
      </div>
    </div>
  )
})

const SortCategorie = ({options, sortFunction}) => {
  const [ activeOptions, setActiveOptions ] = useState(false);
  const [ defaultOptions, setDefaultOption ] = useState(0);

  const setSort = (index) => {
    setDefaultOption(index);
    sortFunction(index);
  }

  return (
    <div className="SortCategorie flex_align_center"> 
      <span onClick={() => setActiveOptions(!activeOptions)}>
        <span className="mr10" >{options[defaultOptions]}</span>
        <img src={iconDownArrow} />
      </span>
      {options.length > 1 && activeOptions && 
        <div className="SortCategorie_options">
          { options.map(( item, index ) => (
            <div key={index} onClick={() => setSort(index)}> {item} </div>
          )) }
        </div>
      }
    </div>
  )
}