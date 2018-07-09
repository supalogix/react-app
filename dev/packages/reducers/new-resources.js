export const initialState = Results()

export default (state = initialState, event = {}) => {
    if(event.type === "NEW_RESOURCES_RECEIVED")
        return event.payload
    return state
}

export function Results() {
    return [ ]
}


