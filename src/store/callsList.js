import { makeAutoObservable } from "mobx";
import { API_CALL_STATUS_IN_COMING, API_CALL_STATUS_OUT_GOING, DEFAULT_CALLS_START_DAY } from "../helpers/Constants";

class CallsList {
    callsStartDate = DEFAULT_CALLS_START_DAY;
    callsListSort = false;

    constructor() {
        makeAutoObservable(this)
    }

    setSortInComingCalls() {
        this.callsListSort = API_CALL_STATUS_IN_COMING;
    }

    setSortOutGoingCalls() {
        this.callsListSort = API_CALL_STATUS_OUT_GOING;
    }

    setNotSort () {
        this.callsListSort = false;
    }

    incrementCallsStartDay = () => {
        if( this.callsStartDate === 31 ){
            this.callsStartDate = 1;
        }
        else {
            this.callsStartDate += 1;
        }
    }

    decrementCallsStartDay = () => {
        if( this.callsStartDate === 1 ){
            this.callsStartDate = 31;
        }
        else {
            this.callsStartDate -= 1;
        }
    }
}

export default new CallsList();