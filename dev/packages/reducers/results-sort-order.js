export const initialState = "NEWEST"

export default (state = initialState, event = {}) => {
    if(event.type === "SORT_ORDER_CHANGED")
        return event.payload

    return state
}
