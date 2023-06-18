import React, { useEffect, useState } from "react";
import "./styles/CallsLayout.css";
import callsList from "../store/callsList";
import { formatDaysBeforeToDate } from "../helpers/Config";
import { observer } from "mobx-react-lite";
import { Loader } from "../helpers/ui kit/Loader";
import { CallsItem } from "./CallsItem";

export const CallsLayout = observer(() => {

  const [ callsData, setCallsData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  
  const fetchCalls = async() => {
    const dateStart = formatDaysBeforeToDate(callsList.callsStartDate);
    const dateEnd = formatDaysBeforeToDate(0);
    const API_URL = `https://api.skilla.ru/mango/getList?date_start=${dateStart}&date_end=${dateEnd}`;
    let fetchHeaders = new Headers();
    fetchHeaders.append("Authorization", "Bearer testtoken");

    const requestOptions = {
      method: 'POST',
      headers: fetchHeaders,
      redirect: 'follow'
    };
    try {
        setLoading(true);
        const response = await fetch(API_URL, requestOptions);
        setLoading(false);
        const result = await response.json();
        setCallsData(result.results );
    } catch (err) {
        setError(err)
    }
  }

  useEffect(() => {
    fetchCalls()
  }, [callsList.callsStartDate])

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
        { loading && 
          <div className="flex_center">
            <Loader /> 
          </div>
        }
        {callsData && callsList.callsListSort ?
         callsData.map(item => {
          if(item?.status === callsList.callsListSort) {
            return <CallsItem callObj={item} key={item.id} />
          }
          return;
         })
          :
          callsData.map(item => <CallsItem callObj={item} key={item.id} />)
        }
    </div>
  </div>);
});
