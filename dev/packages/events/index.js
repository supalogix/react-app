import * as EVENT_TYPE from "@app/event-types"

export const pageLoaded = () => ({
    type: EVENT_TYPE.PAGE_LOADED
})

export const searchTermsChanged = (payload = "") => ({
    type: EVENT_TYPE.SEARCH_TERMS_CHANGED,
    payload
})

export const searchResultsRequested = payload => ({
    type: EVENT_TYPE.SEARCH_RESULTS_REQUESTED,
    payload
})

export const searchResultsReceived = payload => {
    payload = payload || {
        data: [],
        searchTerms: ""
    }

    return {
        type: EVENT_TYPE.SEARCH_RESULTS_RECEIVED,
        payload
    }
}

export const pagedForward = () => ({
    type: EVENT_TYPE.PAGED_FORWARD
})

export const pagedBackward = () => ({
    type: EVENT_TYPE.PAGED_BACKWARD
})

export const allCleared = () => ({
    type: EVENT_TYPE.ALL_CLEARED
})

export const sortOrderChanged = (payload = "RECENT") => ({
    type: EVENT_TYPE.SORT_ORDER_CHANGED,
    payload
})