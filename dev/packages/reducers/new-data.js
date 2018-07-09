export const initialState = Results()

export default (state = initialState, event = {}) => {
    if(event.type === "SEARCH_RESULTS_RECEIVED")
        return event.payload.data
    if(event.type === "ALL_CLEARED")
        return []
    return state
}

export function Results() {
    return [ ]
}


