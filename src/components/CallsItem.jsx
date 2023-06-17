import React from "react";
import "./styles/CallsLayout.css";
import Circle from "./../helpers/ui kit/Circle.jsx";
import iconInComingCall from "./../resorces/Calls/vxodyashiy.png";
import iconOutGoingCall from "./../resorces/Calls/isxodyashiy.png";
import iconCanceledCall from "./../resorces/Calls/otklonyon.png";
import { CallGreenButton } from "../helpers/ui kit/CallButton";

export const CallsItem = ( { callObj } ) => {

    const greenColor = "#28A879";
    const callStatus = {
        "Не дозвонился" : iconOutGoingCall,
        "Дозвонился": iconInComingCall,
    }

    const formatPhoneNumber = (num) => {
        const formatNumber = "+" + num[0] + "(" + num.substring(1, 4) + ") " + num.substring(4, 6) + "-" + num.substring(6, 8) + "-" + num.slice(-2);
        return formatNumber;
    }

  return (
    <>  
        <div className="CallsItem_top_line"></div>
        <div className="CallsLayout_grid ">
            <img src={callStatus[callObj.status]} />
            <div className="CallsItem_time">{callObj.date.slice(-8,-3)}</div>
            <img src={callObj.person_avatar} className="CallsItem_avatar" />
            <div className="CallsItem_phone_number">
                {callObj.partner_data.name ? 
                    <> 
                        <div>{callObj.partner_data.name}</div>
                        <span>{callObj.partner_data.phone}</span>
                    </> 
                        : 
                    <>              
                        {formatPhoneNumber(callObj.partner_data.phone)}
                    </>
                }
            </div>
            <div className="CallsItem_source">
                {callObj.source}
            </div>
            <div className="CallsItem_record">
                {!callObj.record ? 
                <div className="flex_center">
                    <Circle color={greenColor} />
                    <Circle color={greenColor} />
                    <Circle color={greenColor} />
                    <CallGreenButton />
                </div>
                :
                callObj.record    
            }
            </div>
            <div className="CallsItem_call_time">
                {callObj.time}
            </div>
        </div>
    </>
  );
};
