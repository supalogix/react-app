import * as STATE from "@app/states"

export const initialState = STATE.NOT_STARTED

export const config = {
    [STATE.NOT_STARTED]: {
        "INITIALIZATION_DATA_REQUESTED": (state, event) =>
            STATE.INITIALIZING
    },
    [STATE.INITIALIZING]: {
        "INITIALIZATION_DATA_RECEIVED": (state, event) => 
            STATE.LANDING
    },
    [STATE.LANDING]: {
        "SEARCH_RESULTS_REQUESTED": (state, event) =>
            STATE.WAITING_FOR_RESULTS,
        "FOLDER_DATA_REQUESTED": (state, event) =>
            STATE.WAITING_FOR_RESULTS,
    },
    [STATE.SHOWING_SEARCH_RESULTS]: {
        "SEARCH_RESULTS_REQUESTED": (state, event) =>
            STATE.WAITING_FOR_RESULTS,
        "ALL_CLEARED": (state, event) =>
            STATE.LANDING
    },
    [STATE.WAITING_FOR_RESULTS]: {
        "SEARCH_RESULTS_RECEIVED": (state, event) =>
            STATE.SHOWING_SEARCH_RESULTS,
        "FOLDER_DATA_RECEIVED": (state, event) =>
            STATE.SHOWING_SEARCH_RESULTS,

    }
}

export default (state = initialState, event = {}) => {
    const func = config[state][event.type]

    if(func)
        return func(state, event)

    return state
}
