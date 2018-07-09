export const initialState = Results()

export default (state = initialState, event = {}) => {
    if(event.type === "FEATURED_DATA_RECEIVED")
        return event.payload
    return state
}

export function Results() {
    return [ ]
}
