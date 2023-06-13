import { makeAutoObservable } from "mobx";
import { DEFAULT_CALLS_START_DAY } from "../helpers/Constants";

class CallsList {
    callsList = [];
    callsStartDate = DEFAULT_CALLS_START_DAY;

    constructor() {
        makeAutoObservable(this)
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