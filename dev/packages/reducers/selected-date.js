import * as EVENT_TYPE from "@app/event-types"
import moment from "moment"
export const initialState = ""

export default (state = initialState, event = {}) => {
    if(event.type === "DATE_CHANGED") 
    {
        return event.payload
    }

    return state
}