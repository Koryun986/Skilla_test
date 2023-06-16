import React, { useEffect } from "react";
import "./styles/CallsLayout.css";
import callsList from "../store/callsList";
import { formatDaysBeforeToDate } from "../helpers/Config";
import { observer } from "mobx-react-lite";
import axios from "axios";

export const CallsLayout = observer(() => {

  const fetchCalls = () => {
    const dateStart = formatDaysBeforeToDate(callsList.callsStartDate);
    const dateEnd = formatDaysBeforeToDate(0);
    const API_URL = `https://api.skilla.ru/mango/getList?date_start=${dateStart}&date_end=${dateEnd}`;
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer testtoken");
    myHeaders.append("Cookie", "PHPSESSID=75vkq8bt7vchf8qef7ehor5els");

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(API_URL, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

  useEffect(() => {
    fetchCalls()
  })

  return (
  <div className="CallsLayout">
    <div className="CallsLayout_container">
        <div className="CallsLayout_header CallsLayout_grid">
            <div>Тип</div>
            <div>Время</div>
            <div>Сотрудник</div>
            <div>Звонок</div>
            <div>Источник</div>
            <div>Оценка</div>
            <div>Длительность</div>
        </div>
    </div>
  </div>);
});
