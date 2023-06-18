import React, { useState } from "react";
import "./styles/MainHeader.css";
import { useEffect } from "react";
import { weekDays, months } from "../helpers/Constants";
import ProgressBar from "./../helpers/ui kit/ProgressBar";
import searchIcon from "./../resorces/Header/search.png";
import arrowDownIcon from "./../resorces/Header/arrow_down.png";
import userPhoto from "./../resorces/Header/user_photo.png";

export default function MainHeader() {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        getFullCurrentDate();
    }, []);
    
    const getFullCurrentDate = () => {
        const date = new Date();
        const fullCurrentDate = weekDays.at(date.getDay() - 1) + ", " + date.getDate() + " " + months.at(date.getMonth());
        setCurrentDate(fullCurrentDate);
    }

    return (
    <div className="MainHeader">
        <div className="Main_container MainHeader_container">
            <div className="MainHeader_date">{currentDate}</div>
            <HeaderUserInfo message="Новые звонки" progressMessage="20 из 30 шт" color="#00A775" progress={33}/>
            <HeaderUserInfo message="Качество разговоров" progressMessage="40%" color="#FFB800" progress={40}/>
            <HeaderUserInfo message="Конверсия в заказе" progressMessage="67%" color="#EA1A4F" progress={67}/>
            <img src={searchIcon} alt="Search..." className="MainHeader_search_icon"/>
            <div className="MainHeader_user">
               ИП Сидорова Александра Михайловна
                <img src={arrowDownIcon} />
            </div>
            <div className="MainHeader_user MainHeader_user_avatar">
                <img src={userPhoto}  />
                <img src={arrowDownIcon} />
            </div>
        </div>
    </div>
    );
}

function HeaderUserInfo( {message, progressMessage, progress, color} ) {
    return (
        <div className="HeaderUserInfo">
            <span>{message} </span> 
            <span className="ProgressMessage" style={{ color }}>{progressMessage}</span>
            <ProgressBar color={color} progressPercentage={progress} />
        </div>
    );
}