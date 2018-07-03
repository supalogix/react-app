const initialState = ""

export default (state = initialState, event = {}) => {
    if(event.type === "SEARCH_TERMS_CHANGED")
        return event.payload

    if(event.type === "SEARCH_RESULTS_RECEIVED") {
        return ""
    }

    return state
}
