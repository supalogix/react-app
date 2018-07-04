import * as EVENT_TYPE from "@app/event-types"
export const initialState = 0

export default (state = initialState, event = {}) => {
    if(event.type === EVENT_TYPE.PAGED_BACKWARD)
        return state - 1
    if(event.type === EVENT_TYPE.PAGED_FORWARD)
        return state + 1
    if(event.type === EVENT_TYPE.ALL_CLEARED)
        return 0
    return state
}