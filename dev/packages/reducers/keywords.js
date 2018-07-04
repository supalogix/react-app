export const initialState = [ ]

export default (state = initialState, event = {}) => {
    if(event.type === "SEARCH_RESULTS_RECEIVED")
        return state.concat(event.payload.terms)
    if(event.type === "ALL_CLEARED")
        return []

    return state
}
