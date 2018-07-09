import u from "updeep"

export const initialState = InitialState()

export default (state = initialState, event = {}) => {
    if(event.type === "INITIALIZATION_DATA_RECEIVED") {
        return event.payload
    }

    return state
}

export function InitialState() {
    return []
}